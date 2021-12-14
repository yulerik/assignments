import React from 'react'
import Thing from './Thing'
import {ThemeContext} from './themeContext'


function UglyThings(props) {
    const {uglyThings, deleteButton, editButton} = React.useContext(ThemeContext)
    const newThings = uglyThings.map(each => <Thing key={each._id} props={each} onClickEdit={editButton} onClickDelete={deleteButton} />)

    return (
        <div>

            <h1>List of ugly things</h1>
            {newThings}
        </div>
    )
}

export default UglyThings