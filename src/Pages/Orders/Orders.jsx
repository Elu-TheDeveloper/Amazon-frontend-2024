import React, { useContext, useEffect,useState } from 'react'
import Layout from '../../components/Layout/Layout';
import classes from "../Orders/order.module.css"
import { DataContext } from '../../components/DataProvider/DataProvider';
import { db } from '../../Utility/firebase';
import ProductCard from "../../components/Product/ProductCard"
function Orders() {
  const [{user},dispatch] = useContext(DataContext)
  const [orders, setOrders]=useState([]);
  useEffect(()=>{
  if(user){
db.collection("users")
.doc(user.uid)
.collection("orders")
.orderBy("created","desc")
.onSnapshot((snapshot)=>{
  console.log(snapshot)
  setOrders(
    snapshot.docs.map((doc)=>({
      id:doc.id,
      data:doc.data(),
    }))
  )
});
  } else{
    setOrders([])
  }
  },[]);
  return (
      <Layout>
        <section className={classes.container_wide}>
          <div className={classes.orders_containers}>
            <h2>Your Orders</h2>
            <div>
              {orders.map((eachOrder, i) => (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder.id}</p>
                  {
                    eachOrder?.data?.basket?.map((order) => (
                      <ProductCard
                        key={order.id}  // Assuming each `order` has an `id`
                        flex={true}
                        product={order}
                      />
                    ))
                  }
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  
  export default Orders;
