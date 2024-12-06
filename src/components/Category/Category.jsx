import React from 'react'
import {CategoryInfo} from'./CategoryInfo'
import CategoryCard from './CategoryCard'
import classes from'./category_module.module.css'

function Category() {
    return (
      <section className={classes.category_container}>
        {
          CategoryInfo.map((info) => (
            <CategoryCard key={info.id} data={info} /> 
          ))
        }
      </section>
    );
  }
export default Category
