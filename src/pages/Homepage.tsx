/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '../component/Button';
import { Loader } from '../component/Loader';
import '../styles/style.scss';

type Products = {
  id: number;
  title: string;
  description: string;
  price: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
};

export function Homepage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    const url = 'https://dummyjson.com/products';
    const response = await fetch(url);
    const respJson = await response.json();
    setProducts(respJson.products);
  };

  useEffect(() => {
    getProduct()
      .then((res) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <div
        className="container"
      >
        {loading && <Loader />}
        {products.map((item: Products) => (
          <div
            id={item.id.toString()}
          >
            <Link
              to={`/detail/${item.id}`}
              key={item.id}
              className="link_description"
            >
              <div>
                <div className="div1">
                  <div className="div2">
                    Title:
                    {' '}
                    {item.title}
                  </div>
                  <img
                    src={item.thumbnail}
                    alt="logo thumbnail"
                    className="image_thumbnail"
                  />
                </div>
                <div className="div1">
                  <div className="div2">
                    Price:
                    {' '}
                    {item.price}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
