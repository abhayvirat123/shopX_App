import React from 'react';
import {Link} from "react-router-dom";
import "./Style.css";
import TextField from '@mui/material/TextField';


function Navbar({state,handelChange,isLoggedin}) {
  let name=localStorage.getItem('name');
  return (
    <nav className='navbar'> 
        <Link to='/' className='navbar__title navbar__item'>shop-X</Link>
        <div className='navbar__item hide-nav'><TextField fullWidth label="Search" id="fullWidth" color="secondary" onChange={handelChange} /></div>
        <Link to='/Login' className='navbar__item'>
          {
            isLoggedin?(
              name
            ):("LOGIN")
          }</Link>
        <Link to='/cart' className='navbar__item hide-nav'><i className="fa fa-shopping-cart" aria-hidden="true"></i> {state}</Link>        
    </nav>
  )
}
export default Navbar;