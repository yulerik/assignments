import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'

function FormInputs(props) {
    const {formInputs, handleChange, submitInputs} = useContext(ThemeContext)
    return (
        <form id='submit' onSubmit={submitInputs}>
            <input 
                type='text'
                placeholder='Ugly Thing Title'
                name='title'
                id='title'
                onChange={handleChange}
                minLength='3'
                value={formInputs.title}
                required
            />
            <input 
                type='text'
                placeholder='Description of Ugly Thing'
                name='description'
                id='description'
                onChange={handleChange}
                value={formInputs.description}
                minLength='3'
                required
            />
            <input 
                type='text'
                placeholder='URL of Ugly Thing Image'
                name='imgUrl'
                id='imgUrl'
                onChange={handleChange}
                value={formInputs.imgUrl}
                minLength='3'
                required
            />
            <button>Submit</button>
        </form>
    )
} 

export default FormInputs