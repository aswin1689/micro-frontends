import React, { useState, useEffect } from 'react';
import './App.css';
import ReactLogo from './logo.svg';

function App() {
  const [items, setItems] = useState([]);
  const imgSrc = `http://localhost:5002${ReactLogo}`;

  useEffect(() => {
    // window.addEventListener('addToCart', (event) => {
    //   setItems({ items: [...items, event.product] });
    // }, false);
    setItems(JSON.parse(window.sessionStorage.getItem('cart')));
  });

  const renderCart = () => {
    if (items.length === 0) {
      return <p>Your cart is empty</p>;
    }
    return <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </thead>
      <tbody>{items.map(renderItem)}</tbody>
    </table>;
  }

  const renderItem = (product, index) => {
    return <tr key={index}>
      <td>{product.name}</td>
      <td>${product.price}.00</td>
      <td>{product.quantity}</td>
    </tr>;
  }

  return (
    <div className="App">
      {/* <img src={imgSrc} className="App-logo" alt="react logo" /> */}
      <h3>Cart</h3>
      {renderCart()}
    </div>
  );
}

export default App;
