import React from 'react'

class Name extends React.Component {
    
    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}

export default Name