import react from 'react'
import {Routes, Route, Link, Outlet} from 'react-router-dom'

// import Layout from './Layout'
import Home from './Home'
import About from './About'
import Services from './Services'

function App() {
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
            <Routes>
                <Route path ='./' element={<App />}></Route>
                    <Route index element={<Home />}></Route>
                    <Route path='about'element={<About />}></Route>
                    <Route path='services' element={<Services />}></Route>
            </Routes>
            <Outlet />
        </div>
    )
}

export default App