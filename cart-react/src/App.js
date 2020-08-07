import React, { useState, useEffect } from 'react';
import './App.css';
import ReactLogo from './logo.svg';

function App() {
  const [items, setItems] = useState([]);
  const imgSrc = `http://localhost:5002${ReactLogo}`;

  useEffect(() => {
    window.addEventListener('addToCart', (event) => {
      setItems({ items: [...items, event.product] });
    }, false);
  });

  const renderCart = () => {
    if (items.length === 0) {
      return <p>Your cart is empty</p>;
    }
    return <ul>{ items.map(renderItem) }</ul>;
  }

  const renderItem = (product, index) => {
    return <li key={index}>{ product.name } - ${ product.price }</li>;
  }

  return (
    <div className="App">
      <img src={imgSrc} className="App-logo" alt="react logo" />
      <h3>Cart</h3>
      { renderCart() }
    </div>
  );
}

export default App;
