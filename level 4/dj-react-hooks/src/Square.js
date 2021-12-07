import React from 'react'

function Square(props) {
    const squareStyling = {
        border: '1px solid black',
        backgroundColor: props.color,
        width: '230px',
        height: '230px'
    }

    return (
        <div style={squareStyling}></div>
    )
}

export default Square