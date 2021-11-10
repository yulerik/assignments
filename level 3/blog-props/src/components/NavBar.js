import React from 'react'

function NavBar(props) {
    return (
        <div className='navBar'>
            <a>Start Bootstrap</a>
            <nav >
                <ul className='menuLinks'>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Sample Post</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar