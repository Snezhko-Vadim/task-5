import React from 'react';
import ReactDOM from 'react-dom';

function GetNumber(props){
return <MultNumber number={props.number}/>
}

class MultNumber extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <OutNumber number={this.props.number*2}/>
    }
}
class OutNumber extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <h4>Your result number {this.props.number}</h4>
    }
}

ReactDOM.render(<GetNumber number="5"/>,document.getElementById("root"));