import React from 'react'
import classes from "./footer.module.css"
import { Link } from "react-router-dom"
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
    <div className={classes.top_container}>
    <h2>See personalized recommendations</h2>
    </div>
    <div className={classes.signin_container}>
      <div className={classes.signin_link}>
      <Link to="/auth">Signin</Link></div>
    </div>
     <div className={classes.back_to_top}>
     <Link to="/" onClick={scrollToTop}>Back to top</Link>
    </div>
    <section className={classes.container}>
      <div className={classes.footer_wrapper}>
        <h1>Get to Know Us</h1>
        <ul>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Amazon</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Amazon Devices</a></li>
          <li><a href="#">Amazon Science</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper}>
        <h1>Make Money With Us</h1>
        <ul>
          <li><a href="#">Sell products on Amazon</a></li>
          <li><a href="#">Sell on Amazon Business</a></li>
          <li><a href="#">Sell apps on Amazon</a></li>
          <li><a href="#">Become an Affiliate</a></li>
          <li><a href="#">Advertise Your Products</a></li>
          <li><a href="#">Self-Publish with Us</a></li>
          <li><a href="#">Host an Amazon Hub</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper}>
        <h1>Amazon Payment Products</h1>
        <ul>
          <li><a href="#">Amazon Business Card</a></li>
          <li><a href="#">Shop with Points</a></li>
          <li><a href="#">Reload Your Balance</a></li>
          <li><a href="#">Amazon Currency Converter</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper}>
        <h1>Let Us Help You</h1>
        <ul>
          <li><a href="#">Amazon and COVID-19</a></li>
          <li><a href="#">Your Account</a></li>
          <li><a href="#">Your Orders</a></li>
          <li><a href="#">Shipping Rates & Policies</a></li>
          <li><a href="#">Returns and Replacement</a></li>
          <li><a href="#">Manage Your Content and Device</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
     
    </section>
    <div className={classes.copyright}>
  <Link to="https://www.linkedin.com/in/eliyas-daba-b5793b27a/" style={{ textDecoration: 'none', listStyle: 'none' , color:'white'}}>
  <h4>Built By Eliyas Daba</h4>
  </Link>
</div>
    <div className={classes.container_lower}>
    <div className={classes.footer_wrapper_lower}>
        <h5>Amazon Music</h5>
        <ul>
          <li><a href="#">Music Streaming</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Amazon Adds</h5>
        <ul>
          <li><a href="#">Reach customers
wherever they
spend their time</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>6pm</h5>
        <ul>
          <li><a href="#">Score deals
          on fashion brands</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>AbeBooks</h5>
        <ul>
          <li><a href="#">Books, art
          & collectibles</a></li>
        </ul>
      </div>
       <div className={classes.footer_wrapper_lower}>
        <h5>ACX</h5>
        <ul>
          <li><a href="#">Audiobook Publishing
Made Easy</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Sell on Amazon</h5>
        <ul>
          <li><a href="#">Start a Selling Accounty</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Veeqo</h5>
        <ul>
          <li><a href="#">Shipping Software
          Inventory Management</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Amazon Business</h5>
        <ul>
          <li><a href="#">Everything For
          Your Business</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>AmazonGlobal</h5>
        <ul>
          <li><a href="#">Ship Orders
          Internationally</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Home Services</h5>
        <ul>
          <li><a href="#">Experienced Pros
          Happiness Guarantee</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Amazon Web Services</h5>
        <ul>
          <li><a href="#">Scalable Cloud
          Computing Services</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Audible</h5>
        <ul>
          <li><a href="#">Listen to Books & Original
          Audio Performances</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Box Office Mojo</h5>
        <ul>
          <li><a href="#">Find Movie
          Box Office Data</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Goodreads</h5>
        <ul>
          <li><a href="#">Book reviews
          & recommendations</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>IMDb</h5>
        <ul>
          <li><a href="#">Movies, TV
          & Celebrities</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>IMDbPro</h5>
        <ul>
          <li><a href="#">Get Info Entertainment
          Professionals Need</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Kindle Direct Publishing</h5>
        <ul>
          <li><a href="#">Indie Digital & Print Publishing
          Made Easy</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Prime Video Direct</h5>
        <ul>
          <li><a href="#">Video Distribution
          Made Easy</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Shopbop</h5>
        <ul>
          <li><a href="#">Designer
          Fashion Brands</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Woot</h5>
        <ul>
          <li><a href="#">Deals and
          Shenanigans</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Zappos</h5>
        <ul>
          <li><a href="#">Shoes &
          Clothing</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Ring</h5>
        <ul>
          <li><a href="#">Smart Home
          Security Systems</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>eero WiFi</h5>
        <ul>
          <li><a href="#">Stream 4K Video
          in Every Room</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Blink</h5>
        <ul>
          <li><a href="#">Smart Security
          for Every Homes</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Neighbors App</h5>
        <ul>
          <li><a href="#">Real-Time Crime
          & Safety Alerts</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>Amazon Subscription Boxes</h5>
        <ul>
          <li><a href="#">Top subscription boxes – right to your door</a></li>
        </ul>
      </div>
      <div className={classes.footer_wrapper_lower}>
        <h5>PillPack</h5>
        <ul>
          <li><a href="#">Pharmacy Simplified</a></li>
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default Footer;
