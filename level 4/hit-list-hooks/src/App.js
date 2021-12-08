import React, {useState, useEffect } from 'react'
import BackgroundButton from './BackgroundButton'
import Hit from './Hit'
import axios from 'axios'
import './styles.css'


function App() {
    const [hitList, setHitList] = useState({
        loading: false,
        list: [],
        loadingColor: false,
        titleColor: ''
    })
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
            .then(response => response.json())
            .then(data => {
                setHitList(prevState => ({
                    ...prevState,
                    loading: false,
                    list: data
                }))
            })
    }, [])

    useEffect(() => {
        axios.get('https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}')
            .then(response => {
                setHitList(prevState => ({
                    ...prevState,
                    loadingColor: false,
                    titleColor: response.data['new_color']
                }))
            })
            .catch(err => console.log(err))
    })

    // const loadingText = this.state.loading ? 'loading hit list' : 'list has loaded'
    const loadingText = hitList.loading ? 'loading hit list' : hitList.list.map(each => <Hit info={each} />)
    const titleColor = hitList.loadingColor ? 'orange' : `#${hitList.titleColor}`

    return (
        <div id='hit-list' style={{backgroundColor: hitList.randomColor}}>
                <h1 style={{backgroundColor: titleColor}} >Don Corleone's Hit List</h1>
                <BackgroundButton />
                <ul>
                    {loadingText}
                </ul>
            </div>
    )
}

export default App