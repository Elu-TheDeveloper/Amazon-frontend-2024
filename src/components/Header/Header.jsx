import React, { useContext } from 'react'
import{Link} from 'react-router-dom'
import classes from "./style.module.css"
import { BsSearch } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from "../../Utility/firebase"
function Header() {
  const[{basket,user},dispatch]=useContext(DataContext)
  const totalItem=basket?.reduce((amount,item)=>{
return item.amount +amount;
  },0)
  return (
    <div className={classes.fixed_header}>
      
      <section>
            <div  className={classes.header_container}>
                {/* logo */}
                <div className={classes.logo_container}>
                <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                </Link>
                {/* Delivery */}
               
                <div className={classes.delivery}>
                  <span>
                <SlLocationPin />
                </span>
                <div>
                    <p>Deliver to</p>
                    <span>Ethiopia</span>
                </div>
                </div>
                </div>
            {/* search */}
            <div className={classes.search}>
                <select name="" id="">
                    <option value="">All</option>
                    {/* <option value="">Arts and Crafts</option>
                    <option value="">Automative</option>
                    <option value="">Baby</option>
                    <option value="">Beauty and Personal Care</option> */}
                </select>
                <input type="text" name="" id="" placeholder="Search Amazon" />
                <BsSearch size={42} />
            </div>

            {/* right-side */}
            <div className={classes.order_container}>
              <Link to="" className={classes.language}> <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" 
          alt="USA Flag"
        />
        <select name="" id="">
          <option value="">EN</option>
        </select>
        </Link>
        
        
            {/* Three components */}

            <Link to={!user &&"/auth"}>
  <div>
    {
      user ? (
        <>
          <p>Hello {user.email?.split("@")[0]}</p>
          <span onClick={()=>auth.signOut()}>Sign Out</span>
        </>
      ) : (
        <>
          <p>Hello, Sign In</p>
          <span>Account & Lists</span>
       
        </>
      
      
        
      )
    }
  </div>
</Link>
<Link to="/orders" className={classes.loopers}>
<div>
<>
  <p>Returns</p>
  <span>& Orders</span>
  </>
</div>
  
</Link> 
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
            <PiShoppingCartSimpleLight size={50} />
            {/* icon */}
            <span>{basket.length}</span>
            </Link>
          
          
            </div>
            </div>
            
        </section>
        <LowerHeader/>
  
    
     
    </div>
  )
}

export default Header
