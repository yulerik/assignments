import React from 'react'
import Friend from './Friend'
import listOfFriends from './listOfFriends'

function FriendList(props) {
    const allFriends = listOfFriends.map(friend => <Friend product={friend}/>)

    return (
        <div>
            {allFriends}
        </div>
    )
}

export default FriendList