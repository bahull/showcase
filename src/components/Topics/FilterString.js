import React, {Component} from "react"

export default class FilterString extends Component {
              constructor(props){
                super(props)

                this.state = {
                    names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
                    userInput: '',
                    filteredNames: []
                }

                
              }
        
              handleState (val) {
                this.setState({ userInput: val});
            }
               
            filterMethod(userInput){
              console.log(this.state.filteredNames)
              var newArray = [];
              var newNames = this.state.names;
                       // var userLength= userInput.length;
                       for (var i=0;i<newNames.length;i++){
                         if (newNames[i].toLowerCase().includes(userInput.toLowerCase())) {
                          newArray.push(newNames[i]);
                         }
                       }
                       this.setState({ filteredNames: newArray})
                       }
            




    render() {
      return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter stringify</h4>
            <span className="puzzleText">Original: { JSON.stringify(this.state.names) }</span>
            <input className="inputLine" onChange={ e => this.handleState(e.target.value) } placeholder="Is your name here?" ></input>
            <button className="confirmationButton" onClick={ () => this.filterMethod(this.state.userInput)}></button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredNames) }</span>
        </div>
      )
    }
  }