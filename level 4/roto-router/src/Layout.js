// import react from 'react'
import {Link, Outlet} from 'react-router-dom'

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='services'>Services</Link>
                    </li>
                    <li>
                        <Link to='about'>About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout