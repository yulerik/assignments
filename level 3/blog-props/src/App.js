import React from 'react'
import Styles from './styles.css'
import blogPosts from './postHistory'
import Header from './components/Header'
import BlogList from './components/BlogList'
import Footer from './components/Footer'

function App(props) {

    return (
        <div>
            <Header />
            <BlogList product={blogPosts} />
            <Footer />
        </div>
    )
}

export default App