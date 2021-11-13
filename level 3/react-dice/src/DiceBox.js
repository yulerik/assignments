import React, {Component} from 'react'
import Die from './Die'

class DiceBox extends React.Component {
    constructor () {
        super()
        this.state = {
            num1: 1,
            num2: 2,
            num3: 3,
            num4: 4,
            num5: 5
        }
        this.randomDice = this.randomDice.bind(this)
    }
    randomDice() {
        this.setState(prevState => {
            const randomNumber = () => Math.floor(Math.random() * (6 - 1 + 1) + 1)
            return {
                num1: randomNumber(),
                num2: randomNumber(),
                num3: randomNumber(),
                num4: randomNumber(),
                num5: randomNumber()
            }
        })
    }
    
    render() {
        const dice = Object.values(this.state)
        const displayDice = dice.map(each => <Die displayNum = {each} />)

        return (
            <div className='dice'>
                {displayDice}
                <button onClick={this.randomDice}>Roll the Dice</button>
            </div>
        )
    }
}

export default DiceBox