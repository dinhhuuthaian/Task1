// src/components/Cart.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { removeFromCart } from '../../features/cart/cartSlice';
import vecCart from '/TASK 1/my-app/src/home/asset/icon/VectorShopingcart.svg'
import style from './Cart.module.css'
import { useNavigate } from 'react-router';

const Cart: React.FC = () => {
  
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  }
  const navigate = useNavigate()

  const headingClickHandler = () => {
    navigate('/cartDetail')}
  ;
  
  return (
    <div className={style.container}>
      {cartItems.length === 0 ? (
        <p></p>
      ) : (
        cartItems.map(item => (
          <div className={style.topRight} key={item.id}>
            <span className={style.navBag}>
            <p>{item.quantity}</p>
            </span>
            {/* <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button> */}
          </div>
        ))
      )}
      <div className={style.shopingcart}><img src={vecCart} onClick={headingClickHandler}/></div>
    </div>
  );
};

export default Cart;
