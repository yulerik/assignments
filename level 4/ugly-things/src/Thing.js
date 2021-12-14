import React from 'react'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

function Thing(props) {
    const {title, description, imgUrl, _id} = props.props

    return(
        <div id={_id}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>{imgUrl}</h3>
            <img src={imgUrl} alt=''></img>
            <EditButton onClickEdit={props.onClickEdit}/>
            <DeleteButton onClickDelete={props.onClickDelete} />
        </div>
    )
}

export default Thing