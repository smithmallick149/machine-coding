import './App.css';
// import React from 'react';

const ProgressBar = ({progress}) => {
  return (
    <div className='outer'>
      <div className='inner' 
        style={{
          // width: `${progress}%`
          transform: "translateX(${progress - 100}%)",
        }} 
        role='progressbar'
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progress Bar"
      >{progress}%</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <ProgressBar progress={90} />
    </div>
  );
}

export default App;