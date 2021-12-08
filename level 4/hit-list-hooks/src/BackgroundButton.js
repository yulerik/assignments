import React, {useEffect, useState} from 'react'
import axios from 'axios'

function BackgroundButton(props) {
    function button(event) {
        event.preventDefault()
        alert('button works')
        
    }

    return (
        <button onClick={button}>Change Background Color</button>
    )
}

export default BackgroundButton