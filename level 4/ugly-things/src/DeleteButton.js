import React from 'react'

function DeleteButton(props) { 

    return (
        <button onClick={props.onClickDelete}>Delete</button>
    )
}

export default DeleteButton