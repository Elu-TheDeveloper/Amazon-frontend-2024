import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './Pages/Payment/Payment';
import Landing from './Pages/Landing/Landing';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Auth from'./Pages/Auth/Auth'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51QG5WnGlpvIfw2K4Ob6hlOJJmzik7JdPOvYrIBY0mfVHF3yHHkMbXIk4LKWdz9ogZVDO21boxmgWwqdkU5b2RfYG00lLl2ZsMT');
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute msg={"first you must login to pay"} redirect={"/payment"} >
<Elements stripe={stripePromise}>
              <Payment />
            </Elements>
            </ProtectedRoute>
            
          }
        />
        <Route path="/orders" element={
           <ProtectedRoute msg={"first you must login to get your orders"} redirect={"/orders"} >
          <Orders />
          </ProtectedRoute>
          } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
