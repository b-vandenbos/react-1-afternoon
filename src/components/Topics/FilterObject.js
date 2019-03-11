import React, {Component} from 'react'

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                {
                  name: 'Object 1',
                  color: 'orange',
                  size: 12,
                },
                {
                  name: 'Object 3',
                  color: 'blue',
                  shape: 'square'
                },
                {
                  name: 'Object 2',
                  shape: 'circle',
                }
              ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterObject(userInput) {
        let arr = this.state.unFilteredArray;
        let filteredArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].hasOwnProperty(userInput)) {
                filteredArray.push(arr[i]);
            }
        }
        this.setState({ filteredArray: filteredArray});
    }

    render() {

        return (   
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray) }</span>
            <input className="inputLine" placeholder="Property:" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => {this.filterObject(this.state.userInput)} }>Filter</button>
            <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
        </div>
        )
    }

    };
