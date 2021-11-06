import React from 'react'

function Spot(props) {
    // returns 1, 2, or 3 money signs depending on price
    function moneySigns(price) {
        if (price < 500) {
            return ' $'
        } else if (price >= 500 && price < 1000) {
            return ' $ $'
        } else if (price >= 1000) {
            return ' $ $ $'
        }
    }
    // change seasonal color depending on timeToGo prop
    let seasonalColor
    if (props.product['timeToGo'] === 'Winter') {
        seasonalColor = '#c778f0'
    } else if (props.product['timeToGo'] === 'Autumn') {
        seasonalColor = '#ffa500'
    } else if (props.product['timeToGo'] === 'Spring') {
        seasonalColor = '#f73a9e'
    } else if (props.product['timeToGo'] === 'Summer') {
        seasonalColor = '#ffd52e'
    } else {
        seasonalColor = 'Beige'
    }
    // styling object for wrapping div
    const divStyling = {
        backgroundColor: seasonalColor,
        width: '320px',
        margin: '15px',
        borderRadius: '23px'
    }
    // changes money signs to actual price of vaca
    function priceAlert(event) {
        event.target.textContent = props.product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    }
    // changes back to correct money signs
    function moneySignsLeaving(event) {
        event.target.textContent = event.target.id

    }

    return (
        <div style ={divStyling}>
            <h2>{props.product.place}</h2>
            <h3>Cost: 
                <span id={moneySigns(props.product['price'])} onMouseLeave={moneySignsLeaving} onMouseOver={priceAlert}>
                    {moneySigns(props.product['price'])}
                </span>
            </h3>
            <p style={{textDecoration: 'underline', fontWeight: 'bold'}}>When to visit </p>
            <p>{props.product['timeToGo']}</p>
        </div>
    )
}

export default Spot