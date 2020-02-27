import React from 'react'
import OutNumber from './outNumber'

class MultNumber extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <OutNumber number={this.props.number*2}/>
    }
}
export default MultNumber;