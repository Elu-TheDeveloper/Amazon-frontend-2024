import React, { useContext } from 'react';
import Layout from '../../components/Layout/Layout';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import Currency from '../../components/Product/Currency';
import { Link } from 'react-router-dom';
import classes from './cart.module.css';
import { Type } from '../../Utility/ActionType';
import { IoArrowUp } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    });
  };

  return (
    <div>
      <Layout>
        <section className={classes.container}> 
          <div className={classes.cart_container}>
            <h2>Hello</h2>
            <h3>Your shopping basket</h3>
            <hr />
            {basket?.length === 0 ? (
              <p>Oops! No item in your cart</p>
            ) : (
              basket?.map((item) => (
                <section className={classes.cart_product}
                
                key={item.id}>
                  <ProductCard
                    product={item}
                    renderDsc={false}
                    renderBtn={false} 
                    flex={true}
                  />
                  <div className={classes.button_container}>
                    <button className={classes.button} onClick={() => increment(item)}>
                    <IoArrowUp size={25}/>
                    </button>
                    <span>{item.amount}</span>
                    <button className={classes.button} onClick={() => decrement(item.id)}>
                    <IoArrowDown size={25} />
                    </button>
                  </div>
                </section>
              ))
            )}
          </div>
           
          {basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <Currency amount={total} />
              </div>
              <span>
                <input type='checkbox' />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payment">Continue to checkout</Link>
            </div>
          )}
        </section>
      </Layout>
    </div>
  );
}

export default Cart;
