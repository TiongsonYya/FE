import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products'; 
import Product from './components/Product'; 
import Customer from './components/UICustomer/customer';
import CustomerNavbar from './components/UICustomer/CustomerNavbar';
import CustomerProduct from './components/UICustomer/CustomerProduct'; // Import the new component
import CustomerProducts from './components/UICustomer/CustomerProducts';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
            </>
          }
        />
        <Route
          path="/products/:id"
          element={
            <>
              <Navbar />
              <Product />
            </>
          }
        />
        <Route
          path="/UICustomer/customer"
          element={<Customer />}
        />
        <Route
          path="/UICustomer/CustomerProducts/:id" // Add the new path
          element={
            <>
              <CustomerNavbar />
              <CustomerProduct />
            </>
          }
        />
         <Route
          path="/UICustomer/CustomerProducts"
          element={
            <>
              <CustomerNavbar />
              <CustomerProducts />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
