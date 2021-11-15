import { findByLabelText } from '@testing-library/dom'
import React, {Component} from 'react'
import Name from './Name'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            listOfNames: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.state.listOfNames.push(this.state.name)
        event.target.value = ''
        const {value} = event.target
        this.setState(prevState => [...prevState.listOfNames, ...value])
        this.state.name = ''
    }

    render() {
        const listItem = this.state.listOfNames.map(each => <Name name={each} />)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='Enter Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <button>Add name to list</button>
                </form>
                <h1>{this.state.name}</h1>
                <ul>
                    Entered Names:
                    {listItem}
                </ul>
            </div>
        )
    }
}

export default App