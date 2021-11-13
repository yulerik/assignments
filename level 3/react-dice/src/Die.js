import React, {Component} from 'react'

class Die extends React.Component {

    render() {

        return (
            <div className='display-die'>
                <h1>{this.props.displayNum}</h1>
            </div>
        )
    }
}

export default Die