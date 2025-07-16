import './App.css';
import React from 'react';

// Dummy Chip component
const Chip = ({ label, onRemove }) => (
  <div className="chip">
    <span>{label}</span>
    <span onClick={onRemove} style={{ cursor: 'pointer', marginLeft: 8 }}>X</span>
  </div>
);

function App() {
  const [data, setData] = React.useState([]);
  const [input, setInput] = React.useState('');

  const addData = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && input.trim()) {
      setData([...data, input.trim()]);
      setInput('');
    }
  };
    const removeData = (index) => {
    // Logic to remove the chip can be added here
    console.log(`Remove chip at index: ${index}`);
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter chip data"
        value={input}
        onChange={addData}
        onKeyDown={handleKeyDown}
      />
      <div style={{ margin: '20px' , display: 'flex', flexWrap: 'wrap' }}>
        {data.length > 0 &&
          data.map((item, index) => (
            <Chip key={index} label={item} onRemove={() => removeData(index)}/>
          ))}
      </div>
    </div>
  );
}

export default App;