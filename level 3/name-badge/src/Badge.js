import React from 'react'

class Badge extends React.Component {

    render() {
        const {firstName, lastName, email, phone, favFood, birthPlace, textArea} = this.props.product
        let phoneNumber = phone.split('')
        phoneNumber.splice(3,0, '-')
        phoneNumber.splice(7,0, '-')
        const finalPhone = phoneNumber.join('')
        return (
            <li>
                <h1 id='badge'>Information Badge</h1>
                <h3 id='name'>Name: </h3><h2 id='name-input'>{firstName} {lastName}</h2>
                <h3 id='phone-number'>Phone: </h3><h2 id='phone-number-input'>{finalPhone}</h2>
                <h3 id='email-address'>Email: </h3><h2 id='email-address-input'>{email}</h2>
                <h3 id='favorite-food'>Favorite Food: </h3><h2 id='favorite-food-input'>{favFood}</h2>
                <h3 id='birth-place'>Place of Birth: </h3><h2 id='birth-place-input'>{birthPlace}</h2>
                <h2 id='text-area-input'>{textArea}</h2>
            </li>
        )
    }
}

export default Badge