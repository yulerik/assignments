import React, {useState, useEffect} from "react"
import { render } from 'react-dom'
import axios from 'axios'

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [formInputs, setFormInputs] = useState({
        title: '',
        description: '',
        imgUrl: '',
        _id: ''
    })
    const [uglyThings, setUglyThings] = useState([])
    
    function updateList() {
        axios.get(`https://api.vschool.io/yuleriksorensen/thing`)
            .then(response => {
                console.log(response.data)
                setUglyThings((response.data))
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        updateList()
    }, [])

    function deleteButton(event) {
        const thingId = event.target.parentElement.id
        axios.delete(`https://api.vschool.io/yuleriksorensen/thing/${thingId}`)
            .then(response => {
                console.log(response)
                updateList()
            })
            .catch(error => console.log(error))
    }

    function editButton(event) {
        alert('working')
        console.dir(event.target.parentElement)
        const thingId = event.target.parentElement.id
        // filter out current Object
        const currentThing = uglyThings.filter(each => each._id === thingId)
        // destructure current object in state
        const {_id, title, description, imgUrl} = currentThing[0]

        const newForm = 
            <form name={_id} onSubmit={editChangeSubmit}>
                <input placeholder={title} name='title'></input>
                <input placeholder={description} name='description' ></input>
                <input placeholder={imgUrl} name='imgUrl'></input>
                <button>Update Ugly Thing</button>
            </form>
        const divForm = document.createElement('div')
        divForm.id = `edit-${thingId}`
        event.target.parentElement.replaceChild(divForm, event.target)
        render(newForm, document.getElementById(divForm.id))

    }

    function editChangeSubmit(event) {
        event.preventDefault()
        console.dir(event.target)
        // id for object
        const currentId = event.target.name
        // current object in state array
        const currentIndexNumber = uglyThings.findIndex(index => index._id === currentId)
        const currentThing = uglyThings[currentIndexNumber]
        // old values
        const {_id, title, description, imgUrl} = currentThing
        // new values
        let newTitle = event.target[0].value
        let newDescription = event.target[1].value
        let newImgUrl = event.target[2].value
        // if new inputs left blank, replace with old values
        if (newTitle === '') {
            newTitle = title
        } 
        if (newDescription === '') {
            newDescription = description
        }
        if (newImgUrl === '') {
            newImgUrl = imgUrl
        }
        // object for put call
        const newThing = {
            "title": newTitle,
            "description": newDescription,
            "imgUrl": newImgUrl
        }
        // put call to update current id in database, updates list after success
        axios.put(`https://api.vschool.io/yuleriksorensen/thing/${currentId}`, newThing)
            .then(response => {
                console.log(response)
                updateList()
            })
        // create new button and replace with form
        const newEditButton = document.createElement('button')
        newEditButton.textContent = 'Edit'
        newEditButton.onclick= editButton 
        document.getElementById(currentId).replaceChild(newEditButton, document.getElementById(`edit-${currentId}`))
    }

    function handleChange(event) {
        event.preventDefault() 
        const {name, value} = event.target
        setFormInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function submitInputs(event) {
        event.preventDefault()
        const {title, description, imgUrl} = formInputs
        // new object for thing
        const newUglyThing = {
            'title': title,
            'description': description,
            'imgUrl': imgUrl
        }
        // post call new object to list of things
        axios.post("https://api.vschool.io/yuleriksorensen/thing", {...newUglyThing})
            .then(response => {
                console.log(response.data)
                updateList()
            })
            .catch(error => console.log(error))
        // update the inputs to blank
        setFormInputs({
            title: '',
            description: '',
            imgUrl: ''
        })
        
    }
    
    return (
        <ThemeContext.Provider value={{
            formInputs, 
            handleChange, 
            submitInputs, 
            uglyThings, 
            deleteButton, 
            updateList,
            editButton
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}