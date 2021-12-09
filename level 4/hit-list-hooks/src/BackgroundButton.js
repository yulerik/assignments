import React from 'react'
// import randomcolor from 'randomcolor'
// import axios from 'axios'

function BackgroundButton(props) {
    // function button(event) {
    //     event.preventDefault()
    //     const randomHexColor = randomcolor()
    //     alert(`button works. random color is ${randomHexColor}`)

    // }


    return (
        <button onClick={props.onClick}>Change Background Color</button>
    )   
}

export default BackgroundButton