import React from 'react'
import './styles.css'
import Badge from './Badge'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: '',
            textArea: '',
            listOfBadges: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target 
        this.setState({ [name]: value })
        
        const {firstName, lastName, email, birthPlace, phone, favFood, textArea} = this.state
        // submit button disabled while length is less than 3 in all fields
        if (firstName.length >= 2 && lastName.length >= 2 && email.length >= 2 && birthPlace.length >= 2 && phone.length >= 2 && favFood.length >= 2 && textArea.length >= 2) {
            document.getElementById('submit-button').disabled = false
        } else {
            document.getElementById('submit-button').disabled = true
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        const {firstName, lastName, email, phone, textArea, favFood, birthPlace} = event.target
        const newState = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            birthPlace: birthPlace.value,
            textArea: textArea.value,
            favFood: favFood.value
        }
        this.setState(prevState => prevState.listOfBadges.push(newState))
        // clear state directly since the forms display state. do not clear the array of badges.
        for (let each in this.state) {
            if (!Array.isArray(this.state[each])) {
                this.state[each] = ''
            }
        }
    }

    render() {
        const badges = this.state.listOfBadges.map(badgeObject => <Badge product={badgeObject} />)

        return (
            <div id='mainWrapper'>
                <form id='name-entry' onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        id='firstName'
                        minLength='3'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required

                    />
                    <input 
                        type='text'
                        value={this.state.lastName}
                        name='lastName'
                        id='lastName'
                        placeholder='Last Name'
                        onChange={this.handleChange}
                        minLength='3'
                        required
                    />
                    <input 
                        type='text'
                        value={this.state.email}
                        name='email'
                        id='email'
                        placeholder='Email'
                        onChange={this.handleChange}
                        minLength='3'
                        required
                    />
                    <input 
                        type='text'
                        value={this.state.birthPlace}
                        name='birthPlace'
                        id='birthPlace'
                        placeholder='Place of Birth'
                        onChange={this.handleChange}
                        minLength='3'
                        required
                    />
                    <input 
                        type='number'
                        value={this.state.phone}
                        name='phone'
                        id='phone'
                        placeholder='Phone (numbers only)'
                        onChange={this.handleChange}
                        minLength='3'
                        required
                    />
                    <input 
                        type='text'
                        value={this.state.favFood}
                        name='favFood'
                        id='favFood'
                        placeholder='Favorite Food'
                        onChange={this.handleChange}
                        minLength='3'
                        required
                    />
                    <textarea 
                        type='text'
                        value={this.state.textArea}
                        name='textArea'
                        id='textArea'
                        placeholder='Tell us about yourself'
                        onChange={this.handleChange}
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
}

export default App