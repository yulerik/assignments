import React from 'react'
import NavBar from './NavBar'

function Header(props) {
    return (
        <div className='header'>
            <NavBar />
            <h1>Clean Blog</h1>
            <h6>A Blog Theme by Start Bootstrap</h6>
        </div>
    )
}

export default Header