import React from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import classes from './category_module.module.css';

function CategoryCard({data}) {

  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
