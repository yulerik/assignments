import React from 'react'
import Pet from './Pet'

function Friend(props) {
    // array of pet objects from list of friends
    const listOfPets = props.product.pets
    // each pet returns Pet component
    const petFacts = listOfPets.map(pet => <Pet product={pet}/>)

    return (
        <div>
            <h1>{props.product['name']}</h1>
            <h4>{props.product['age']}</h4>
            {/* pet components array */}
            {petFacts}
        </div>
    )
}

export default Friend