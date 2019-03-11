import React, {Component} from 'react'

export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            unFilteredArray: ['I checked to make sure that he was still alive.', 'Lets all be unique together until we realise we are all the same.', 'Let me help you with your baggage.'],
            userInput: '',
            filteredArray: []
        };
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterStrings(userInput) {
        let array = this.state.unFilteredArray;
        let filteredArray = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i].includes(userInput)) {
                filteredArray.push(array[i]);
            }
        }
        this.setState({ filteredArray: filteredArray});
    }

    render() {
        return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">{this.state.unFilteredArray}</span>
            <input className="inputLine" placeholder="String:" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => {this.filterStrings(this.state.userInput)} }>Filter</button>
            <span className="resultsBox filterStringRB">{this.state.filteredArray}</span>
        </div>
        )
    }
}
