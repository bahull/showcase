import React, {Component} from "react"

export default class EvenAndOdd extends Component {
            constructor(props){
                super(props)
                 

                this.state = {
                    evenArray: [],
                    oddArray: [],
                    userInput: ""
                }
            }
            handleChange (val) {
                this.setState({ userInput: val});
            }

            assignEvenAndOdds(userInput){
                    var holder = userInput.split(",")
                    var evens = [];
                    var odds = [];

                 for (var i=0; i<holder.length; i++){
                     holder[i]=parseInt(holder[i], 10);
                     if (holder[i] % 2 === 0) {
                       evens.push(holder[i]);
                     } else if (holder[i] % 2 !== 0 && !isNaN(holder[i])){
                       odds.push(holder[i]);
                       console.log(odds);
                     }
                  }
                  this.setState({ evenArray: evens, oddArray: odds});
                  }  
                  
            

    render() {
      return (
        <div className="puzzleBox evenAndOddPB">
           <h4>"Even and Odds"</h4>
           <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}placeholder="Choose a number!"></input>
           <button className="confirmationButton" onClick={ () => this.assignEvenAndOdds(this.state.userInput) }>Split</button>
           <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
           <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
        </div>
      )
    }
}