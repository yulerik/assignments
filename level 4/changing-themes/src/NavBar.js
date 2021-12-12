import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'

function NavBar(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <nav className={theme}>
            <button className={theme}>Home</button>
            <button className={theme}>About</button>
            <button className={theme}>Contact</button>
        </nav>
    )
}

export default NavBar