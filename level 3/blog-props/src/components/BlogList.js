import React from 'react'
import BlogPosts from './BlogPost'

function BlogList(props) {
    const allPosts = props.product.map(post => <BlogPosts title={post.title} subTitle={post.subTitle} author={post.author} date={post.date} />)

    return (
        <div id='main-blog-wrap'>
            <div id='main-blog'>{allPosts}</div>
            <div id='older-posts'><a href=''>Older Posts</a></div>
        </div>
    )
}

export default BlogList