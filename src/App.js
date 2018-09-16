import React from 'react';
import ChartContainer from './components/ChartContainer';
import UploadButton from './components/UploadButton';
import TabMenu from './components/TabMenu';

const App = () => {
    return (
      <div className="App">
          <UploadButton />
          <ChartContainer />
      </div>
    );
  };

export default App;
