import React from 'react'

function Pet(props) {
    const petStyling = {

    }

    return (
        <p style={petStyling}>{`${props.product['name']}, the loyal ${props.product['breed']}`}</p>
    )
}

export default Pet