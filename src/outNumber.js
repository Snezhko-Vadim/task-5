import React from 'react'
class OutNumber extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <h4>Your result number {this.props.number}</h4>
    }
}
export default OutNumber;