import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import products from '../../assets/fakedata/product';  // Import the local products data

const CustomerProducts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    // Use the local products data instead of fetching from an API
    setData(products);
    setFilter(products);
    setLoading(false); // Set loading to false after setting the data
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("kid's clothing")}>Kids Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
      </div>
       
      <div className="row">
        {filter.map((product) => {
          return (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="mt-2"> {/* Add margin-top space */}
                  <h5 className="card-title">{product.title}</h5>
                </div>
                <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                <NavLink to={`/UICustomer/CustomerProducts/${product.id}`} className="btn btn-outline-dark">
  Buy Now
</NavLink>

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
      <div className="container my-5 py-5">
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

export default CustomerProducts;
