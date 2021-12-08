import React, {useState} from 'react'
import Badge from './Badge'
import './styles.css'

function App() {
    const [formInputs, setFormInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthPlace: '',
        phone: '',
        favFood: '',
        textArea: '',
        listOfBadges: []
    })

    const badges = formInputs.listOfBadges.map(badgeObject => <Badge product={badgeObject} />)

    function handleSubmit(event) {
        event.preventDefault()
        setFormInputs(({listOfBadges, firstName, lastName, email, phone, textArea, favFood, birthPlace}) => ({
            listOfBadges: [...listOfBadges, {firstName, lastName, email, phone, textArea, favFood, birthPlace}], 
            firstName: '', lastName: '', email: '', phone: '', textArea: '', favFood: '', birthPlace: ''}))
    }

    function handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        const {firstName, lastName, email, birthPlace, phone, favFood, textArea} = formInputs
        // submit button disabled while length is less than 3 in all fields
        if (firstName.length >= 2 && lastName.length >= 2 && email.length >= 2 && birthPlace.length >= 2 && phone.length >= 2 && favFood.length >= 2 && textArea.length >= 2) {
            document.getElementById('submit-button').disabled = false
        } else {
            document.getElementById('submit-button').disabled = true
        }
        setFormInputs(prevState => ({...prevState, [name]: value}))

    }

    return (
        <div id='mainWrapper'>
            <form id='name-entry' onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    id='firstName'
                    minLength='3'
                    value={formInputs.firstName}
                    onChange={handleChange}
                    required

                />
                <input 
                    type='text'
                    value={formInputs.lastName}
                    name='lastName'
                    id='lastName'
                    placeholder='Last Name'
                    onChange={handleChange}
                    minLength='3'
                    required
                />
                <input 
                    type='text'
                    value={formInputs.email}
                    name='email'
                    id='email'
                    placeholder='Email'
                    onChange={handleChange}
                    minLength='3'
                    required
                />
                <input 
                    type='text'
                    value={formInputs.birthPlace}
                    name='birthPlace'
                    id='birthPlace'
                    placeholder='Place of Birth'
                    onChange={handleChange}
                    minLength='3'
                    required
                />
                <input 
                    type='number'
                    value={formInputs.phone}
                    name='phone'
                    id='phone'
                    placeholder='Phone (numbers only)'
                    onChange={handleChange}
                    minLength='3'
                    required
                />
                <input 
                    type='text'
                    value={formInputs.favFood}
                    name='favFood'
                    id='favFood'
                    placeholder='Favorite Food'
                    onChange={handleChange}
                    minLength='3'
                    required
                />
                <textarea 
                    type='text'
                    value={formInputs.textArea}
                    name='textArea'
                    id='textArea'
                    placeholder='Tell us about yourself'
                    onChange={handleChange}
                    minLength='3'
                    required
                />
                <button id='submit-button' disabled={true}>Submit</button>
            </form>
            <ul>
                {badges}
            </ul>
        </div>
    )
}

export default App