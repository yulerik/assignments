import React, {useState} from 'react'
import './styles.css'
import Square from './Square'
import Colors from './colors'

function App() {
    const [ colors, setColors ] = useState(Colors)
    console.log(colors)

    // function increment() {
    //     setCount(prevCount => prevCount + 1)
    // }

    function whiteBoxes() {
        setColors(Colors)
        setColors(prevColors => {
            const newColors = prevColors.map(each => (each === 'white') ? 'black' : 'white')
            return newColors
        })
    }
    
    function purpleTop() {
        setColors(prevColors => {
            const newColors = ['purple', 'purple', prevColors[2], prevColors[3]]
            return newColors
        })
    }

    function blueBottomLeft() {
        setColors(prevColors => {
            const newColors = [prevColors[0], prevColors[1], 'blue', prevColors[3]]
            return newColors
        })
    }

    function blueBottomRight() {
        setColors(prevColors => {
            const newColors = [prevColors[0], prevColors[1], prevColors[2], 'blue']
            return newColors
        })
    }

    function topLeft() {
        setColors(prevColors => {
            const newColors = ['green', prevColors[1], prevColors[2], prevColors[3]]
            return newColors
        })
    }

    function topRight() {
        setColors(prevColors => {
            const newColors = [prevColors[0], 'yellow', prevColors[2], prevColors[3]]
            return newColors
        })
    }

    function bottomLeft() {
        setColors(prevColors => {
            const newColors = [prevColors[0], prevColors[1], 'orange', prevColors[3]]
            return newColors
        })
    }

    function bottomRight() {
        setColors(prevColors => {
            const newColors = [prevColors[0], prevColors[1], prevColors[2], 'red']
            return newColors
        })
    }


    const squareColors = colors.map(each => <Square color={each} />)

    return (
        <div id='main-root'>
            {squareColors}
            <button onClick={whiteBoxes}>Dj Beginner</button>
            <button onClick={purpleTop}>Party Dj</button>
            <button onClick={blueBottomLeft}>Bottom Left Blue</button>
            <button onClick={blueBottomRight}>Bottom Right Blue</button>
            <button onClick={topLeft}>Top Left</button>
            <button onClick={topRight}>Top Right</button>
            <button onClick={bottomLeft}>Bottom Left</button>
            <button onClick={bottomRight}>Bottom Right</button>
        </div>
    )
}

export default App