import React from 'react';
import { format } from 'date-fns';
import ExampleComponent from './ExampleComponent';
import TestComponent from './TestComponent'; // Make sure this import is correct

function App() {
  const currentTime = format(new Date(), 'h:mm:ss a');

  return (
    <div className="App">
      <h1>{currentTime === '5:10:27 PM' ? 'Now' : currentTime}</h1>
      <p className="App-intro">
        {/* ... */}
      </p>
      <ExampleComponent />
      <TestComponent /> {/* Make sure this line is correct */}
    </div>
  );
}

export default App;
