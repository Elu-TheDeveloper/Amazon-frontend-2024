import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/EndPoints';
import ProductCard from '../../components/Product/ProductCard';
import classes from './Result.module.css';
import Loader from '../../components/Loader/Loader';

function Results() {
  const [results, setResults] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // Set loading to true
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false); // Set loading to false after fetching
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set loading to false on error
      });
  }, [categoryName]); 

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.product_container}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderBtn={true}
                renderDsc={false}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
