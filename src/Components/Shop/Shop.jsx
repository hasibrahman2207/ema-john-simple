import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() =>{
    fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
const handleAddToCart =(product) =>{
  const newcart =[...cart, product];
  setCart(newcart)
}

  return (
    <div className='shop-container'>
      <div className="products-container">
     {
      products.map(product => <Product
      key={product.id}
      product={product}
      handleAddToCart ={handleAddToCart}
      ></Product>)
     }
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;