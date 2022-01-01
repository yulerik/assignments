import React from 'react'

function NewBountyForm(props) {
    const {firstName, lastName, living, bountyAmount, type} = props.state

    return (
        <form style={{display: props.state ? 'none' : 'grid'}} id='newBountyForm' name='newBounty' onSubmit={props.onSubmit}>
            <label>First Name: </label>
            <input
                type='text'
                name='firstName'
                value={firstName}
                placeholder='First Name'
                onChange={props.onChange}
            />
            <label>Last Name: </label>
            <input
                type='text'
                name='lastName'
                value={lastName}
                placeholder='Last Name'
                onChange={props.onChange}
            />
            <label>Living: </label>
            <input
                type='boolean'
                name='living'
                value={living}
                placeholder='true/false'
                onChange={props.onChange}
            />
            <label>Bounty Amount: </label>
            <input
                type='number'
                name='bountyAmount'
                value={bountyAmount}
                placeholder='price for bounty'
                onChange={props.onChange}
            />
            <label>Type: </label>
            <input
                type='text'
                name='type'
                value={type}
                placeholder='jedi or sith'
                onChange={props.onChange}
            />
            <button onSubmit={props.handleSubmit} >Add Bounty</button>
        </form>
    )
}

export default NewBountyForm