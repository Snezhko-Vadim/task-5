import React,{Fragment} from 'react';
import List from './list';

  class App extends React.Component{
    constructor() {
        super();
      }
      render(){
        return <Fragment>
            <h1>Hello world</h1>
            <List/>
        </Fragment>;
      }
  }
  export default App;

/*   import React,{Component} from 'react';

  class App extends Component{
    constructor() {
        super();
      }
      render(){
        return <h1>Hello world</h1>;
      }
  }
  export default App; */