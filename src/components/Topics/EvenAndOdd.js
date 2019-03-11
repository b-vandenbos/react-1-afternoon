import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    handleChange(num) {
        this.setState({ userInput: num });
    }

    evenAndOdd(num) {
        let evens = [];
        let odds = [];

        
            if (num % 2 === 0) {
                evens.push(num);
            } else if (num % 2 === 1) {
                odds.push(num);
            }
        
        this.setState({evenArray: evens, oddArray: odds});
    } 



    render() {
        return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" placeholder="Number:" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => {this.evenAndOdd(this.state.userInput)} }>Split</button>
            <span className="resultsBox" value="evenArray">Evens: {this.state.evenArray}</span>
            <span className="resultsBox" value="oddArray">Odds: {this.state.oddArray}</span>
        </div>
        )
    }
}
