import { useState } from 'react';
import './App.css';
import Products from './data.json';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Mobile from './Components/Mobile-Footer/Mobile';
import ProductDetails from './Components/Product/ProductDetails';
import { useLayoutEffect } from 'react';
import { message } from 'antd';

function App() {
  let [isLoggedin, setIsLoggedin] = useState(false);
  let [cart, setCart] = useState([]);
  let [svalue, setSvalue] = useState("")

  let handelChange = (e) => {
    setSvalue(e.target.value)
    console.log(svalue)
  }

  let search = Products.filter((x) => {
    if (svalue === "") {
      return x
    } else {
      return x.title.toLowerCase().includes(svalue)
    }
  })

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  const handelClick = (item) => {
    if (isLoggedin === true) {
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
      console.log(item)
      message.success("The item is added to Your Cart")
    } else {
      message.warning('Login Please')
    }
  }

  const handleChange1 = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    message.success("The item is removed from Your Cart")
    // handlePrice();
  };

  return (
    <Router>
      <Navbar state={cart.length} isLoggedin={isLoggedin} products={Products} handelChange={handelChange} />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home updateState={handelClick} products={search} />} />
          <Route path='/cart' element={<Cart updateState={handleRemove} handelc={handleChange1} item={cart} />} />
          <Route path='/Login' element={<Login isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />} />
          <Route path='/productdetails/:id' element={<ProductDetails products={search} />} />
        </Routes>
      </Wrapper>
      <Mobile />
    </Router>
  );
}

export default App;
