import React, {Component} from 'react'

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: '',
            statement: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    stringCheck(userInput) {
        let str = userInput;
        let splitString = str.split('');
        let reverseString = splitString.reverse();
        let palindrome = reverseString.join('');
        this.setState({palindrome: palindrome});
        if (str === palindrome) {
            this.setState({ statement: 'This word is a palindrome'});
        }
        else if (str !== this.state.palindrome) {
            this.setState({ statement: 'This word is not a palindrome'});
        }
    }

    render() {
        return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" placeholder="Word:" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => {this.stringCheck(this.state.userInput)} }>Check</button>
            <span className="resultsBox">Result: {this.state.statement}</span>
        </div>
        )
    }
}