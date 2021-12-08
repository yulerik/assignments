import React from 'react'

function Hit(props) {
    return (
        <li>
            <h3>{props.info.name}</h3>
            <img src={props.info.image} alt={props.info.name} ></img>
        </li>
    )
}

export default Hit