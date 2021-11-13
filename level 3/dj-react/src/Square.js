import React, {Component} from 'react'

class Square extends React.Component {

    
    render() {
        const squareStyling = {
            border: '1px solid black',
            backgroundColor: this.props.color,
            width: '230px',
            height: '230px'
        }

        return (
            <div style={squareStyling}></div>
        )
    }
}

export default Square