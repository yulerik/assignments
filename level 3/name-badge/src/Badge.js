import React from 'react'

class Badge extends React.Component {

    render() {
        const {firstName, lastName, email, phone, favFood, birthPlace, textArea} = this.props.product
        return (
            <li>
                <h1>Badge:</h1>
                <h2>Name: {firstName} {lastName} </h2>
                <h2>Phone: {phone} </h2>
                <h2>Email: {email} </h2>
                <h2>Favorite Food: {favFood} </h2>
                <h2>Place of Birth: {birthPlace} </h2>
                <p>{textArea}</p>
            </li>
        )
    }
}

export default Badge