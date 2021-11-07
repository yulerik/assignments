import React from 'react'
import Friend from './Friend'
import listOfFriends from './listOfFriends'

function FriendList(props) {
    const allFriends = listOfFriends.map(friend => <Friend product={friend}/>)
    
    const bodyStyling = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px'
    }

    return (
        <div style={bodyStyling}>
            {allFriends}
        </div>
    )
}

export default FriendList