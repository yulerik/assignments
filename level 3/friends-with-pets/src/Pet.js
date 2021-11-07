import React from 'react'

function Pet(props) {
    console.log(props)
    return (
        <h2>{`${props.product['name']}, the loyal ${props.product['breed']}`}</h2>
    )
}

export default Pet