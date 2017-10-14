// completed Kata on codewars.com and added to this file. https://www.codewars.com/kata/tortoise-racing/javascript


import React, {Component} from "react"

export default class BlackDiamond extends Component {
  constructor(props){
    super(props)

    this.state = {
        number1: 0,
        number2: 0,
        lead: 0,
        sum: 0,
    }

    
  }

  handleState1 (val) {
    this.setState({ number1: val});
}
handleState2 (val) {
  this.setState({ number2: val});
}
handleState3 (val) {
    this.setState({ lead: val});
}
   
distanceDecider(number1, number2, lead){
        let time=lead/(number2-number1);
        var sum = number2>number1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
        this.setState({sum : sum})
      }




    render() {
     return (
                <div className="puzzleBox filterObjectPB">
                  <h4>Time to catch up!</h4>
                     <input className="inputLine" onChange={ e => this.handleState1(e.target.value) } placeholder="How fast is your friend going?"></input>
                     <input className="inputLine" onChange={ e => this.handleState2(e.target.value) } placeholder="How fast are you going?"></input>
                     <input className="inputLine" onChange={ e => this.handleState3(e.target.value) } placeholder="How far ahead is your friend in feet?"></input>
                     <button className="confirmationButton" onClick={ () => this.distanceDecider(this.state.number1, this.state.number2, this.state.lead)}>Click to find out how long it will take you to catch your friend!</button>
                     <span className="resultsBox filterObjectRB">Sum: { JSON.stringify(this.state.sum) }</span>
                </div>
                 )
        }
}   