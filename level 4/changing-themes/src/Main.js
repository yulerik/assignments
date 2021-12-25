import React from 'react'
import Button from './Button'
import {ThemeContext} from './themeContext'

function Main(props) {

    const {theme} = React.useContext(ThemeContext)
    return (
        <div id='main' className={theme}>
            <h1>Click the button to change the theme</h1>
            <Button />
        </div>
    )
}

export default Main