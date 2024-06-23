import React from 'react';
import './App.css'; 
export default function App(){
  return (
    <>
    <Navbar></Navbar>
    <Hero/>
    </>
  )
}

function Navbar(){
  return (
    <div>
      <nav>
        <div>
          <img src="https://m.media-amazon.com/images/I/31xnH7lXujL._SX300_SY300_QL70_FMwebp_.jpg" alt="logo" className='logo'></img>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  )
}
 
function Hero(){
  return (
    <main className='hero'>
      <div className='hero-content'>
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>Your feet deserves the best as it is the summer seasin and the shoe feet used the most so chose the best out there.</p>
      </div>
      <div className='hero-btn'>
        <button>Shop Now</button>
        <button>Category</button>
      </div>
      <div className='shopping'>
        <p>Also Availble on</p>
      </div>
      <div>
        <span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZpOyGJMh83665KJTbPhVC-KECVyQSXsy1n7i8koMPWpXq__G215sqa99xq5KVz1w7ek&usqp=CAU' alt='flipkart'></img></span>
        <span><img src='https://seeklogo.com/images/A/amazon-icon-logo-5D44CF81DD-seeklogo.com.png' alt='amazone'></img></span>
      </div>
      <div className='hero-image'></div>
    </main>
  )
}