import React, { useContext, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import classes from './payment.module.css';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from "../../components/Product/ProductCard";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { db } from '../../Utility/firebase';
import Currency from '../../components/Product/Currency';
import { axiosInstance } from "../../Api/axios"
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../Utility/ActionType';
function Payment() {
  const [{ user, basket },dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing]=useState(false)

  const stripe = useStripe();
  const elements = useElements();
  const navigate=useNavigate();

  const handleCardError = async (e) => {
    // console.log(e);
    setCardError(e?.error?.message || "");
  };
  const paymentHandler = async (e) => { 
    e.preventDefault();  
    try {
      setProcessing(true)
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total}`,
      });
      // Handle response
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card:elements.getElement(CardElement)
        }
      })
      await db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id).set({
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created,
      });
       dispatch({ type: Type.EMPTY_BASKET})
      navigate("/Orders",{state:{msg:"you have placed new Orders"}})
      setProcessing(false);
      // console.log(paymentIntent)//
    } catch (error) {
      console.log(error);
      setProcessing(false)
    }
  };

  return (
    <Layout>
      {/* header */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      {/* payment Method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>Los Angles, 1254</div>
            <div></div>
          </div>
        </div>
        <hr />
        
        {/* card form */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket.map((item) => (
              <ProductCard
                product={item}
                imgClass={classes.smallImage}
                key={item.id}
              />
            ))}
          </div>
        </div>
        <hr />
        
        {/* payment_option */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__details}>
          <form onSubmit={paymentHandler}>
              {cardError && <small>{cardError}</small>}
              <div className={classes.cardElementWrapper}>
                <CardElement onChange={handleCardError} />
              </div>
              <div>
                <div>
                  <span style={{display: "flex",gap: "10px"}}>
                    Total order | <Currency amount={total} />
                  </span>
                </div>
                <button type="submit">{
                  processing?(
                     <div className={classes.processing}>
<ClipLoader color="yellow" size={20} />
<p>Please Wait...</p>
                    </div>
                  ):"Pay Now"
                  }</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
