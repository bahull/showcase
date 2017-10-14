import React, {Component} from "react"

export default class Sum extends Component {
  constructor(props){
    super(props)

    this.state = {
        number1: 0,
        number2: 0,
        sum: 0,
    }

    
  }

  handleState1 (val) {
    this.setState({ number1: val});
}
handleState2 (val) {
  this.setState({ number2: val});
}
   
filterMethod(number1, number2){
  var parseNum1 = parseInt(number1, 10);
  var parseNum2 = parseInt(number2, 10);
      var result = parseNum1 + parseNum2;
      this.setState({sum: result})
   
  }





render() {
return (
<div className="puzzleBox filterObjectPB">
<h4>Sum</h4>
<input className="inputLine" onChange={ e => this.handleState1(e.target.value) }placeholder="First number?"></input>
<input className="inputLine" onChange={ e => this.handleState2(e.target.value) }placeholder="Second number?"></input>
<button className="confirmationButton" onClick={ () => this.filterMethod(this.state.number1, this.state.number2)}>Add</button>
<span className="resultsBox filterObjectRB">Sum: { JSON.stringify(this.state.sum) }</span>
</div>
)
}
}