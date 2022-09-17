import React from 'react';
import { Link } from 'react-router-dom';
import './Mobile.css'

function Mobile() {
  return (
    <div className='mobile_footer'>
     
        <Link to='/'>Home</Link>
        <Link to='/cart'>cart</Link>
        <Link to='/'>Orders</Link>
        <Link to='/Login'>Profile</Link>
     
    </div>
  )
}

export default Mobile