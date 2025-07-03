import './App.css';
import React from 'react';

function App() {
  const [products, setProducts] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [debouncedInput, setDebouncedInput] = React.useState(input);

  // Debounce input
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 2000);

    return () => clearTimeout(timer);
  }, [input]);

  // Fetch data when debouncedInput changes
  React.useEffect(() => {
    const fetchData = async () => {
      if (debouncedInput) {
        const data = await fetch(`https://dummyjson.com/products/search?q=${debouncedInput}`);
        const json = await data.json();
        setProducts(json.products);
      } else {
        setProducts([]);
      }
    };
    fetchData();
  }, [debouncedInput]);

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search products..."
        className="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;