import React from 'react'
import Pet from './Pet'

function Friend(props) {
    // array of pet objects from list of friends
    const listOfPets = props.product.pets
    // each pet returns Pet component
    const petFacts = listOfPets.map(pet => <Pet product={pet}/>)
    // css for wrapping div
    const friendItem = {
        color: '#d3cca8',
        border: '1px solid #3e1074',
        borderRadius: '15px',
        width: '420px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(3, auto)',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#63954b'
    }
    // css for name
    const nameStyling = {
        color: '#333',
        gridColumn: '1/4',
        textDecoration: 'underline',
    }
    // css for age
    const ageStyling = {
        color: 'black',
        gridColumn: '4/5',
        borderRadius: '10px',
        backgroundColor: '#f57e80'
    }
    // css for title for list of pets
    const hThreeStyling = {
        gridColumn: '1/5', 
        borderBottom: '1px solid black',
        marginBottom: '0px',
        marginTop: '0px',
        paddingBottom: '3px'
    }
    // css for div wrapping pets info
    const petsStyling = {
        color: '#382d45',
        gridColumn: '1/5', 
        backgroundColor: '#a5bf36', 
        marginTop: '0px',
        borderRadius: '0px 0px 15px 15px'
}
    // div with name, age, and an array of Pet components
    return (
        <div style={friendItem}>
            <h1 style={nameStyling}>{props.product['name']}</h1>
            <h3 style={ageStyling}><span>Age: </span>{props.product['age']}</h3>
            <h3 style={hThreeStyling}>{`${props.product['name']}'s Pets:`}</h3>
            {/* pet components array */}
            <div style={petsStyling}>
                {petFacts}
            </div>
        </div>
    )
}

export default Friend