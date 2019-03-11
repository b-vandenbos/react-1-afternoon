import React, {Component} from 'react'

export default class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    num1Change(val) {
        this.setState({ number1: val });
    }

    num2Change(val) {
        this.setState({ number2: val });
    }

    sum(num1, num2) {
        let sum = Number(num1) + Number(num2);
        this.setState({sum: sum});
    }


    render() {
        return (
        <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" placeholder="First Value:" onChange={ (e) => this.num1Change(e.target.value) }></input>
        <input className="inputLine" placeholder="Second Value:" onChange={ (e) => this.num2Change(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => {this.sum(this.state.number1, this.state.number2)} }>Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
        )
    }
}