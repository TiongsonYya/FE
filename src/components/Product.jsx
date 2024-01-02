import React, { useState, useEffect } from 'react';

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      // Manually set product data with image URLs
      const manualData = [
        {
          id: 1,
          title: 'Longsleeve Polo For Men',
          price: 20.99,
          image: '/assets/shirt.jpg',
        },
        {
          id: 2,
          title: '3pcs Plain Shirt for Men',
          price: 30.49,
          image: '/assets/mens.webp',
        },
        {
            id: 3,
            title: 'Couple Shirt',
            price: 30.49,
            image: '/assets/couple.webp',
          },
          {
            id: 4,
            title: 'Necklace',
            price: 30.49,
            image: '/assets/necklace.jpg',
          },
          {
            id: 5,
            title: 'Tops and Pants',
            price: 30.49,
            image: '/assets/women.avif',
          },
          {
            id: 6,
            title: 'Full HD TV',
            price: 30.49,
            image: '/assets/tv.avif',
          },
          
          {
            id: 7,
            title: 'Redmi Note 12 Pro+ ',
            price: 30.49,
            image: '/assets/cp.jpg',
          },
          {
            id: 8,
            title: 'Hoodie Jacket',
            price: 30.49,
            image: '/assets/jacket.webp',
          },
          {
            id: 9,
            title: 'Gym Outfits',
            price: 30.49,
            image: '/assets/gym.webp',
          },
          {
            id: 9,
            title: 'Jewerly sets',
            price: 30.49,
            image: '/assets/jewel.webp',
          },
          
        // Add more products as needed
      ];

      if (componentMounted) {
        setData(manualData);
        setFilter(manualData);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  // Unchanged ShowProducts component
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">Women's Clothing</button>
          <button className="btn btn-outline-dark me-2">Jewelry</button>
          <button className="btn btn-outline-dark me-2">Electronics</button>
        </div>
        <div className="row">
        {filter.map((product) => {
          return (
            <div key={product.id} className="col-md-3 mb-4">
              {/* Add mb-4 for bottom margin */}
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <a href="#" className="btn btn-outline-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

  return (
    <div>
      <div className="container my-5 py05">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Product;
