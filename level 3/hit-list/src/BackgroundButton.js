import React, {Component} from 'react'
import axios from 'axios'

class BackgroundButton extends Component {
    constructor() {
        super()
        this.state = {
            randomColor: 'tan'
        }

        this.newColor = this.newColor.bind(this)
        this.button = this.button.bind(this)
    }
    

    newColor() {
        axios.get('https://www.colr.org/json/color/random?timestamp=${newDate().getTime()}')
            .then(response => {
                this.setState({
                    randomColor: `#${response.data['new_color']}`
                })
                document.body.style.backgroundColor = this.state.randomColor
            })
    }
    
    button() {
        this.newColor()
    }


    render() {
        return (
            <button onClick={this.button}>Change Background Color</button>
        )
    }
}

export default BackgroundButton