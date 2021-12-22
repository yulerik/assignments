import React from 'react'
import {Routes, Route, Link, Outlet} from 'react-router-dom'
import './styles.css'
import {ThemeContext} from './themeContext'

import Home from './Home'
import Fellowship from './Fellowship'
import Characters from './Characters'
import InfoCard from './InfoCard'
import WrongCard from './WrongCard'
import MovieQuotes from './Buttons/MovieQuotes'
import Footer from './Footer'

function App() {
    const {fellowship, getFellowship} = React.useContext(ThemeContext)
    React.useEffect(() => {
        getFellowship()
    }, [])

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='fellowship'>Fellowship Characters</Link>
                    </li>
                    <li>
                        <Link to='characters'>All LOTR Characters</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path ='./' element={<App />}></Route>
                    <Route index element={<Home />}></Route>
                    <Route path='fellowship'element={<Fellowship fellowship={fellowship}/>}></Route>
                    <Route path='characters' element={<Characters />}></Route>
                    <Route path='characters/:characterId' element={<InfoCard />}></Route>
                    <Route path='fellowship/:characterId' element={<InfoCard />}></Route>
                    <Route path='*' element={<WrongCard />}></Route>
            </Routes>
            <Outlet />
            <Footer />
        </>
    )
}

export default App