import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import products from '../../assets/fakedata/product'; 

const CustomerProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        // Assuming products is an array containing the products data
        const selectedProduct = products.find((p) => p.id === id);
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error(`Product with id ${id} not found`);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        Loading....
      </>
    );
  };

  const ShowProduct = () => {
    // Implement the rendering of the product details here
    return (
      <>
       <div className="col-md-6">
        <img src={product.image} alt={product.title} height="400px" width="400px"/>
       </div>
       <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">
        {product.category}
        </h4>
        <h1 className="display-5">
          {product.title}
        </h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">${product.price}
        </h3>
        <p className="lead">{product.description}</p>

        <div className="d-flex align-items-center mt-4">
          <button className="btn btn-outline-dark px-3 py-1 me-2">
            <i className="fa fa-minus"></i>
          </button>
          <span className="mx-2"></span>
          <button className="btn btn-outline-dark px-3 py-1 me-2" >
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <div className="mt-3"> {/* Added margin-top space */}
          <button className="btn btn-outline-dark px-4 py-2 me-2">
            Add to Cart
          </button>
          <NavLink className="btn btn-outline-dark px-4 py-2">Go to Cart</NavLink>
        </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default CustomerProduct;
