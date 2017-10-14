import React, {Component} from "react"

export default class Palindrome extends Component {
  constructor(props){
    super(props)

    this.state = {
        userInput: "",
        palindrome: ""
    }

    
  }

  handleState (val) {
    this.setState({ userInput: val});
}
   
filterMethod(userInput){
   var backWord = userInput.toLowerCase().split("").reverse().join("");
   var result;
          if (backWord === userInput.toLowerCase()){
            result= "True";
          }else {
            result ="False";
          }
          this.setState({ palindrome: result})
          console.log(result)
  }





render() {
return (
<div className="puzzleBox filterObjectPB">
<h4>Palindrome</h4>
<span className="puzzleText">{ JSON.stringify(this.state.names) }</span>
<input className="inputLine" onChange={ e => this.handleState(e.target.value) }></input>
<button className="confirmationButton" onClick={ () => this.filterMethod(this.state.userInput)}></button>
<span className="resultsBox filterObjectRB">Palindrome: { JSON.stringify(this.state.palindrome) }</span>
</div>
)
}
}