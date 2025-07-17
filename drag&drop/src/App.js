import './App.css';
import React, { useRef, useEffect, useState } from 'react';

const Note = ({ label, position, onDragEnd, index }) => {
  const noteRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (noteRef.current && position) {
      noteRef.current.style.left = `${position.x}px`;
      noteRef.current.style.top = `${position.y}px`;
    }
  }, [position]);

  const handleMouseDown = (e) => {
    setDragging(true);
    const rect = noteRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.clientX - offset.current.x;
    const y = e.clientY - offset.current.y;
    noteRef.current.style.left = `${x}px`;
    noteRef.current.style.top = `${y}px`;
  };

  const handleMouseUp = (e) => {
    setDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    const x = e.clientX - offset.current.x;
    const y = e.clientY - offset.current.y;
    onDragEnd(index, { x, y });
  };

  return (
    <div
      className="note"
      ref={noteRef}
      style={{ position: 'absolute', cursor: 'move' }}
      onMouseDown={handleMouseDown}
    >
      <span>{label}</span>
    </div>
  );
};

function App() {
  const [input, setInput] = React.useState('');
  const [data, setData] = React.useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => setInput(e.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && input.trim()) {
      setData([
        ...data,
        { label: input.trim(), position: { x: 50, y: 50 } }, // default position
      ]);
      setInput('');
    }
  };

  const handleDragEnd = (idx, pos) => {
    setData((prev) =>
      prev.map((note, i) =>
        i === idx ? { ...note, position: pos } : note
      )
    );
  };

  return (
    <div style={{ position: 'relative', minHeight: '500px' }}>
      <h1>Drag and Drop Example</h1>
      <input
        type="text"
        placeholder="Enter something..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className="notes-container" style={{ position: 'relative', minHeight: '400px' }}>
        {data.map((item, index) => (
          <Note
            key={index}
            label={item.label}
            position={item.position}
            index={index}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
}

export default App;