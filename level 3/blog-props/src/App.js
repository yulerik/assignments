import React from 'react'
import Styles from './styles.css'
import blogPosts from './postHistory'
import Header from './components/Header'
import BlogList from './components/BlogList'

function App(props) {

    return (
        <div>
            <h1>hello world</h1>
            <Header />
            <BlogList product={blogPosts} />
        </div>
    )
}

export default App