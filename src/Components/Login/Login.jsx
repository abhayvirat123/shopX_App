import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './login.css';
// import { Spin } from 'antd';
// import CircularProgress from '@mui/material/CircularProgress';
import { message } from 'antd';


function Login({ isLoggedin, setIsLoggedin }) {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [loading,setLoading]=useState(false)
  
  let navigate = useNavigate()

  const login = (e) => {
    setLoading(true)
     setTimeout(()=>{
      e.preventDefault();
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('psw', password);
      setIsLoggedin(true);
      navigate('/')
      message.success(`Welcome to shopx ${name}`)
     },2000)
  };
  // let username = localStorage.getItem('name');

  const logout = () => {
    localStorage.removeItem('name');
    setIsLoggedin(false);
  };

  return (
    <>
      <div style={{ textAlign: 'center',marginTop:"120px" }}>
      
        {!isLoggedin ? (
          <>
            <MDBContainer className="my-5">
              <MDBCard>
                <MDBRow className='g-0'>
                  <MDBCol md='12'>
                    <MDBCardBody className='d-flex flex-column'>
                      <div className='d-flex flex-row mt-2'>
                        <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                        <span className="h1 fw-bold mb-0">shop-X</span>
                      </div>
                      <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Login to your account</h5>

                      <MDBInput wrapperClass='mb-4' label='Username'
                        onChange={(e) => setName(e.target.value)}
                        value={name} required id='formControlLg' type='text' size="lg" 
                        
                        />
                        {loading ? <h1>Loading...</h1> : null }

                      <MDBInput wrapperClass='mb-4' label='Email address'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} id='formControlLg' type='email'
                        required
                        invalid= {MDBInput.invalid}
                        validation= "Please provide your email"
                        size="lg" />

                      <MDBInput wrapperClass='mb-4' label='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} id='formControlLg' type='password' size="lg" />

                      <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={login}>Login</MDBBtn>
                      <a className="small text-muted" href="#!">Forgot password?</a>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBContainer>
          </>
        ) : (
          <>
            <h1>User is logged in</h1>
            <button onClickCapture={logout}>logout user</button>
          </>
        )}
      </div>
    </>
  )
}

export default Login