import React, {useEffect, useState} from 'react'
import axios from 'axios'

function EditForm(props) {
    const blankInputs = {
        firstName: '',
        lastName: '',
        living: true,
        bountyAmount: 0,
        type: ''
    }
    const [inputs, setInputs] = useState([])
    const [newInputs, setNewInputs] = useState(blankInputs)

    function handleSubmit(event) {
        event.preventDefault()
        // change empty values, ie no inputs, to old values before put call
        if (newInputs.firstName === '') {
            newInputs.firstName = inputs.firstName
        } 
        if (newInputs.lastName === '') {
            newInputs.lastName = inputs.lastName
        } 
        if (newInputs.type === '') {
            newInputs.type = inputs.type
        } 
        if (newInputs.bountyAmount === 0) {
            newInputs.bountyAmount = inputs.bountyAmount
        }
        if (newInputs.living !== true || newInputs.living !== false) {
            newInputs.living = inputs.living
        }
        // put call with new input objects, update state after successfully put call, hide display for editForm
        axios.put(`/bounty/${inputs.id}`, newInputs)
            .then(res => {
                props.updateBounties()
                console.log(res.data)
                props.editState(false)
            })
            .catch(err => console.log(err))
        // reset inputs for edit Form
        setNewInputs(blankInputs)
    }

    function handleChange(event){
        const {name, value} = event.target
        setNewInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    useEffect(() => {
        setInputs(props.inputs)
    }, [props])

    return (
        <div style={{display: !props.state ? 'none' : 'flex'}} id='edit-form'>
            <form id='editBountyForm' name='editBounty' onSubmit={handleSubmit}>
                <label>Change first name from: {props.inputs.firstName}, to:</label>
                <input
                    type='text'
                    name='firstName'
                    value={newInputs.firstName}
                    placeholder={props.inputs.firstName}
                    onChange={handleChange}
                />
                <br></br>
                <label>Change last name from: {props.inputs.lastName}, to:</label>
                <input
                    type='text'
                    name='lastName'
                    value={newInputs.lastName}
                    placeholder={props.inputs.lastName}
                    onChange={handleChange}
                />
                <br></br>
                <label>Switch living from: {props.inputs.living}, to:</label>
                <input
                    type='boolean'
                    name='living'
                    value={newInputs.living}
                    placeholder={props.inputs.living.toString()}
                    onChange={handleChange}
                />
                <br></br>
                <label>Change bounty amount from: {props.inputs.bountyAmount}, to:</label>
                <input
                    type='number'
                    name='bountyAmount'
                    value={newInputs.bountyAmount}
                    placeholder={props.inputs.bountyAmount}
                    onChange={handleChange}
                />
                <br></br>
                <label>Switch from: {props.inputs.type}, to:</label>
                <input
                    type='text'
                    name='type'
                    value={newInputs.type}
                    placeholder={props.inputs.type}
                    onChange={handleChange}
                />
                <button onSubmit={props.handleSubmit} >Update Bounty</button>
            </form>
        </div>
    )
}

export default EditForm