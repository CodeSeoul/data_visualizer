import React from 'react';
import ChartContainer from './components/ChartContainer';
import UploadComponent from './components/UploadComponent';
class App extends React.Component {
  
  state = {
    data:[]
  };
  
  updateData = newData => {
    this.setState({data: newData});
  };

  render(){
    return (
        <div className="App">
            <UploadComponent updateData={this.updateData}/>
            <ChartContainer data={this.state.data}/>
        </div>
    );
  };
};

export default App;
