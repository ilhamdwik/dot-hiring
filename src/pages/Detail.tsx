/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '../component/Button';
// import { Loader } from '../component/Loader';
// import '../styles/style.scss';

import { useState, useEffect } from 'react';
import { Card } from '../component/Card';

export function Detail() {
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
    <div className="card">
      <img
        src=""
        alt="logo thumbnail"
        className="image_thumbnail"
      />
      <div className="card_container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}

export default Detail;
