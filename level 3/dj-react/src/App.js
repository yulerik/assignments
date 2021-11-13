import React, {Component} from 'react'
import styling from './styles.css'
import Square from './Square'
import Colors from './colors'


class App extends React.Component {
    constructor() {
        super()
        this.state= {
            color: Colors
        }
        this.whiteBoxes = this.whiteBoxes.bind(this)
        this.purpleTop = this.purpleTop.bind(this)
        this.blueBottomLeft = this.blueBottomLeft.bind(this)
        this.blueBottomRight = this.blueBottomRight.bind(this)
        this.topRight = this.topRight.bind(this)
        this.topLeft = this.topLeft.bind(this)
        this.bottomLeft = this.bottomLeft.bind(this)
        this.bottomRight = this.bottomRight.bind(this)
    }

    whiteBoxes() {
        this.setState(prevState => {
            return {
                color: prevState.color.map(each => (each === 'white') ? 'black' : 'white')
            }
        })

    }
    purpleTop() {
        this.setState(prevState => {
            return {
                color: ['purple', 'purple', prevState.color[2], prevState.color[3]]
            }
        })
    }
    blueBottomLeft() {
        this.setState(prevState => {
            return {
                color: [prevState.color[0], prevState.color[1], 'blue', prevState.color[3]]
            }
        })   
    }
    blueBottomRight() {
        this.setState(prevState => {
            return {
                color: [prevState.color[0], prevState.color[1], prevState.color[2], 'blue']
            }
        })   
    }
    topLeft() {
        this.setState(prevState => {
            return {
                color: ['green', prevState.color[1], prevState.color[2], prevState.color[3]]
            }
        })
    }
    topRight() {
        this.setState(prevState => {
            return {
                color: [prevState.color[0], 'yellow', prevState.color[2], prevState.color[3]]
            }
        })
    }
    bottomLeft() {
        this.setState(prevState => {
            return {
                color: [prevState.color[0], prevState.color[1], 'orange', prevState.color[3]]
            }
        })
    }
    bottomRight() {
        this.setState(prevState => {
            return {
                color: [prevState.color[0], prevState.color[1], prevState.color[2], 'red']
            }
        })
    }


    render() {
        const squareColors = this.state.color.map(each => <Square color={each} />)

        return (
            <div id='main-root'>
                {squareColors}
                <button onClick={this.whiteBoxes}>Dj Beginner</button>
                <button onClick={this.purpleTop}>Party Dj</button>
                <button onClick={this.blueBottomLeft}>Bottom Left Blue</button>
                <button onClick={this.blueBottomRight}>Bottom Right Blue</button>
                <button onClick={this.topLeft}>Top Left</button>
                <button onClick={this.topRight}>Top Right</button>
                <button onClick={this.bottomLeft}>Bottom Left</button>
                <button onClick={this.bottomRight}>Bottom Right</button>
            </div>
        )
    }
}

export default App