import React from 'react'

function BlogPost(props) {
    return (
        <div className='blog-post'>
            <a href='' >
                <h2>{props.title}</h2>
                <h4 style={{display: !props.subTitle && "none"}}>{props.subTitle}</h4>
            </a>
            <p>Posted by <a href='' >{props.author}</a> on {props.date}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost