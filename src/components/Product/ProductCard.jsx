// ProductCard.jsx
import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import Currency from './Currency';
import classes from './Product_module.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/ActionType';

const ProductCard = React.memo(function ProductCard({ product = {}, flex, renderDsc, renderBtn, imgClass }) {
  const { image, title, id, rating, price, description } = product || {};
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    if (!product) return;
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flex : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title || "Product Image"} className={`${classes.img_container} ${imgClass || ''}`} />
      </Link>
      <div>
        <h3>{title}</h3>
       {renderDsc && description && (
  <p style={{ maxWidth: "750px" }}>
    {description.length > 200 ? description.substring(0, 200) + "..." : description}
  </p>
)}
        <div className={classes.rating}>
          {rating && (
            <>
              <Rating value={rating.rate || 0} precision={0.1} />
              <small>{rating.count}</small>
            </>
          )}
        </div>
        <div>
          <Currency amount={price} />
        </div>
        {renderBtn && <button className={classes.button} onClick={addToCart}>Add to Cart</button>}
      </div>
    </div>
  );
});

export default ProductCard;
