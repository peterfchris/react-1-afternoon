import React, {Component} from 'react'

export default class FilterObject extends Component {
    constructor(){
        super()

        this.state = {
            siblings: [
                {
                name: 'Nathanael',
                age: 30,
                kids: 2
                },
                {
                name: 'Peter',
                age: 38,
                kids: 0
                },
                {
                name: 'Jacob',
                age: 22,
                kids: .5
                }
            ],
            userInput: '',
            filterSiblings: []
        }
    }

    handleChange(val){
        this.setState({userInput:val})
    }

    filteredSiblings(prop) {
        let siblings = this.state.siblings
        let filterSiblings = []

        for(let i = 0; i < siblings.length; i++) {
            if (siblings[i].hasOwnProperty(prop)) {
                filterSiblings.push(siblings[i])
            }
        }
        this.setState({filterSiblings: filterSiblings})
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.siblings, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filteredSiblings(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filterSiblings, null, 10)}</span>
            </div>
        )
    }
}