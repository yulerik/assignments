import React, {Component} from 'react'
import './styles.css'
import Hit from './Hit'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            list: []
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
    }

    render() {
        // const loadingText = this.state.loading ? 'loading hit list' : 'list has loaded'
        const loadingText = this.state.loading ? 'loading hit list' : this.state.list.map(each => <Hit info={each} />)
        console.log(this.state.list[0])
        
        return (
            <div id='hit-list'>
                <h1>Don Corleone's Hit List</h1>
                <ul>
                    {loadingText}
                </ul>
            </div>
        )
    }
}

export default App