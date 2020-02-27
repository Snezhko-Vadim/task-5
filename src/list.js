import React,{Component} from 'react'
class List extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            isLoading:false
        }
    }
        async componentDidMount() {
            const response=await fetch('https://jsonplaceholder.typicode.com/todos');
                const list = response.json();
                this.setState({
                    isLoading:true,
                    list,
                });
        };

        removeItem=(target)=>{
            const newList=this.state.list.filter(({id})=>+target.id!==id && console.log(id));
            this.setState({
                isLoading:false,
                list,
            });
        }

    render(){
        return this.state.isLoading ? <h2>Loading...</h2>: (
            <ul>
                {
                    this.state.list.map(({id,title}) => <Item onClick={this.removeItem} key={id} title={title} id={id}/>)
                }
            </ul>
        )
    }
}
export default List;