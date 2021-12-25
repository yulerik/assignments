import React from 'react'
import FormInputs from './FormInputs'
import UglyThings from './UglyThings'
import './styles.css'

function App() {
    return (
        <>
            <h1>Enter an ugly thing</h1>
            <FormInputs />
            <hr></hr>
            <UglyThings />
        </>
    )
}

export default App