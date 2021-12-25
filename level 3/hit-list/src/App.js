import React, {Component} from 'react'
import './styles.css'
import Hit from './Hit'
import axios from 'axios'
import BackgroundButton from './BackgroundButton'

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            list: [],
            loadingColor: false,
            titleColor: ''
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    list: data
                })
            })
        axios.get('https://www.colr.org/json/color/random?timestamp=${newDate().getTime()}')
            .then(response => {
                this.setState({
                    loadingColor: false,
                    titleColor: response.data['new_color']
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        // const loadingText = this.state.loading ? 'loading hit list' : 'list has loaded'
        const loadingText = this.state.loading ? 'loading hit list' : this.state.list.map(each => <Hit info={each} />)
        const titleColor = this.state.loadingColor ? 'orange' : `#${this.state.titleColor}`

        return (
            <div id='hit-list' style={{backgroundColor: this.state.randomColor}}>
                <h1 style={{backgroundColor: titleColor}} >Don Corleone's Hit List</h1>
                <BackgroundButton />
                <ul>
                    {loadingText}
                </ul>
            </div>
        )
    }
}

export default App