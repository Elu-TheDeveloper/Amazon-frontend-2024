import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { productUrl } from '../../Api/EndPoints'; 
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({}); 
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data); 
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]); 

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} 
        renderDsc={true}
        flex={true}
        renderBtn={true}
        
        
       
        />
     
        
      )}
    </Layout>
  );
}

export default ProductDetail;