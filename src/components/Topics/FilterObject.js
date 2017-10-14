import React, {Component} from "react"

export default class FilterObject extends Component {
            constructor(props){
              super();

              this.state = {
                unFilteredArray:[
                  {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                  },
                  {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                  },
                  {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                  }
                ],
                userInput:"",
                filteredArray: []
              }
            }
            handleState (val) {
              this.setState({ userInput: val});
          }

          
  
  render() {
      return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText"></span>
            <input className="inputLine" onChange = { e => this.handleState(e.target.value) }></input>
            <button className="confirmationButton" onClick = { () => this.filterMethod(this.state.userInput)}></button>
            <span className="resultsBox filterObjectRB"></span>
        </div>
      )
    }
  }