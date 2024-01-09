import React from 'react';
import CustomerNavbar from './CustomerNavbar';
import CustomerProducts from './CustomerProducts';

const Customer = () => {
  return (
    
    <div className="hero">
      <CustomerNavbar/>
        <div class="card text-bg-dark text-white border-0">
  <img src="/assets/bg.avif" class="card-img" alt="Background"
  height="550px"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
        
    </div>
    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
    <p class="card-text leads fs-2">CHECK OUT ALL THE TRENDS</p>
   
  </div>
</div>
    <CustomerProducts/>   
    </div>
  );
}
export default Customer;
