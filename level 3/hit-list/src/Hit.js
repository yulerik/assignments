import React from 'react'

class Hit extends React.Component {

    render(){
        return (
            <li>
                <h3>{this.props.info.name}</h3>
                <img src={this.props.info.image} alt={this.props.info.name} ></img>
            </li>
        )
    }
}

export default Hit