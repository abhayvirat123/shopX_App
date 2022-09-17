import { useState } from 'react';
import './App.css';
import Products from './data.json';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Mobile from './Components/Mobile-Footer/Mobile';
import ProductDetails from './Components/Product/ProductDetails';

function App() {
  let [isLoggedin, setIsLoggedin] = useState(false);
  let [cart, setCart] = useState([]);
  let [svalue, setSvalue] = useState("")
  let [msg,setMsg]=useState(false)

  const handelClick = (item) => {
    if (isLoggedin === true) {
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
      console.log(item)
      alert("The item is added to Your Cart")
    } else {
      alert("please login...")
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
    alert("The item is removed from Your Cart")
    // handlePrice();
  };

  let handelChange = (e) => {
    setSvalue(e.target.value)
  }

  let search = Products.filter((x) => {
    if (svalue === "") {
      return x
    } else {
      return x.title.toLowerCase().includes(svalue)
    }
  })

  return (
    <Router>
      <Navbar state={cart.length} isLoggedin={isLoggedin} products={Products} handelChange={handelChange} />
      <Routes>
        <Route path='/' element={<Home updateState={handelClick} msg={msg} products={search} />} />
        <Route path='/cart' element={<Cart updateState={handleRemove} handelc={handleChange1} item={cart} />} />
        <Route path='/Login' element={<Login isLoggedin={isLoggedin} setMsg={setMsg} msg={msg} setIsLoggedin={setIsLoggedin} />} />
        <Route path='/productdetails/:id' element={<ProductDetails products={search} />} />
      </Routes>
      <Mobile/>
    </Router>
  );
}

export default App;
