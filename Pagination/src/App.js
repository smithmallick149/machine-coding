import React from "react";
import "./style.css";

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);
const [totalProducts, setTotalProducts] = React.useState(0); // <-- use state
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://dummyjson.com/products?limit=500`);
    const json = await data.json();
    setTotalProducts(json.total); // Store total products count
    setProducts(json.products);
  };
  const pageSize = 10; // Number of products per page
  const noOfPages = Math.ceil(totalProducts / pageSize);
  console.log(noOfPages,'dd');
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const handlechange = (idx) => () => {
    setPage(idx+1);
  };

  const ProductCard = ({ image, title, category }) => {
    return (
      <div className="product-card">
        <div className="image-container">
          <div className="product-category">{category}</div>
          <img src={image} alt={title} className="product-image" />
        </div>
        <h2 className="product-title">{title}</h2>
      </div>
    );
  };
  return (
    <div>
      {products.length === 0 && (
        <div className="loading-container">
          <h1 className="loading-text">Loading...</h1>
        </div>
      )}
      <div className="App">
        {products.slice(start, end).map((product) => {
          return (
            <ProductCard
              image={product.thumbnail}
              title={product.title}
              category={product.category}
            />
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {[...Array(noOfPages)].map((_, idx) => {
          return (
              <button className="pagination" onClick={handlechange(idx)}>{idx+1}</button>
          )
        })}
      </div>
    </div>
  );
}
