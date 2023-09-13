import React, { useEffect, useState } from 'react'
import "./Cart.css"
interface Props{
  handleChange:Function,
  cart:any,
  setCart:any
}
const Cart = ({ cart, setCart, handleChange }:Props) => {

  const [price, setPrice] = useState(0);

  const handleRemove = (id: number) => {
    const arr = cart.filter((item: { id: number; }) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item: { amount: number; price: number; }) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item: any) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.icon} alt="" />
            <p>{item.style }</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
       <div className="total orangeText">
        <span>Total Price of your Cart</span>
        <span >Rs : {price}</span>
      </div>
    </article>
  );
}

export default Cart

