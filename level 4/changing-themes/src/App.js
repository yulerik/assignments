import React, {useContext} from 'react'
import './styles.css' 
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'
import {ThemeContext} from './themeContext'

function App () {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme}>
            <NavBar props={theme} />
            <Main />
            <Footer />
        </div>
    )
}

export default App