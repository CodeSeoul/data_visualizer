import React from 'react';
import ChartContainer from './components/ChartContainer';
import UploadComponent from './components/UploadComponent';
class App extends React.Component {
  //initialize state
  state = {
    data:[]
  };
  
  //load data into state
  updateData = newData => {
    this.setState({data: newData});
  };


  render(){
    return (
        <div className="App">
            { /*pass function into uploadcomponent as a callback */  }
            <UploadComponent updateData={this.updateData}/>
            { /*pass state into chartcontainer */ }
            <ChartContainer data={this.state.data}/>
        </div>
    );
  };
};

export default App;
