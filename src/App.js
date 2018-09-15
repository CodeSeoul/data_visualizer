import React from 'react';
import ChartContainer from './components/ChartContainer';
import UploadButton from './components/UploadButton';

const App = () => {
    return (
      <div className="App">
          <UploadButton />
          <ChartContainer />
      </div>
    );
  };

export default App;
