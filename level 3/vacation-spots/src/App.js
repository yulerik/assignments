import React from 'react'
import Spot from './Spot'
import vacaSpots from './vacaSpots'

function App() {
    const cardItems = vacaSpots.map(vacation => <Spot key={vacation.id} product={vacation}/>)
    const styling = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    return (
        <div style={styling}>
            <h1>List of Vacation Spots</h1> 
            {cardItems}
        </div>
    )
}

export default App