import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewBountyForm from './components/NewBountyForm'
import Bounty from './components/Bounty'
import './styles.css'

function App(props) {
    const blankInputs = {
        firstName: '',
        lastName: '',
        living: true,
        bountyAmount: 0,
        type: ''
    }
    const [bounties, setBounties] = useState([])
    const [inputs, setInputs] = useState(blankInputs)

    
    
    function handleChange(event){
        const {name, value} = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('/bounty', inputs)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setInputs(blankInputs)
        const newBountyForm = document.newBounty
        const {firstName, lastName, living, bountyAmount, type} = newBountyForm
        firstName.value = ''
        lastName.value = ''
        living.value = ''
        bountyAmount.value = ''
        type.value = ''
    }
    
    useEffect(() => {
        axios.get('/bounty')
            .then(res => setBounties(res.data))
            .catch(error => console.log(error))
    }, [bounties])

    return (
        <>
            <NewBountyForm 
                onChange={handleChange} 
                onSubmit={handleSubmit} 
                bounties={bounties} 
                state={inputs, setInputs, bounties, setBounties}
            />
            {bounties.map(bounty => <Bounty {...bounty} key={bounty.id} />)}
        </>
    )
}

export default App