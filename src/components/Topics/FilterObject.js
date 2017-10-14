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
             
          filterMethod(userInput){
            var sift = [];
            
                       for (let i=0;i<this.state.unFilteredArray.length;i++){
                         if (this.state.unFilteredArray[i].hasOwnProperty(userInput)) {
                           sift.push(this.state.unFilteredArray[i]);
                         }
                       }
                    this.setState({ filteredArray: sift})
                     }
          

  
  render() {
      return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray) }</span>
            <input className="inputLine" onChange={ e => this.handleState(e.target.value) } placeholder="Filter by specific item!" ></input>
            <button className="confirmationButton" onClick={ () => this.filterMethod(this.state.userInput)}></button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
        </div>
      )
    }
  }
