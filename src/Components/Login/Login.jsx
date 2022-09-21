import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
}
  from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './login.css';
import { Button, Col, Form, Input, message, Row } from 'antd';


function Login({ isLoggedin, setIsLoggedin }) {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const login = (e) => {
    // e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      // e.preventDefault();
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('psw', password);
      setIsLoggedin(true);
      navigate('/')
      message.success(`Welcome to shopx ${name}`)
    }, 2000)
  };
  let username = localStorage.getItem('name');
  let gmail = localStorage.getItem('email');
  // let pass = localStorage.getItem('password');

  const logout = () => {
    localStorage.removeItem('name');
    setIsLoggedin(false);
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: "120px" }}>

        {!isLoggedin ? (
          <>
            {loading ? <h1>Loading...</h1> : null}
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
                      <Form name="basic" onFinish={login}>
                        <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!'}]}>
                          <Input placeholder='Username' onChange={(e) => setName(e.target.value)} value={name} />
                        </Form.Item>

                        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                          <Input placeholder='Email' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </Form.Item>

                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!'}]}>
                          <Input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </Form.Item>
                       <Row>
                        <Col md={24}>
                        <Form.Item>
                          <Button style={{width:"100px",height:"40px"}} className='btn-log' type="primary" htmlType="submit">
                            Login
                          </Button>
                        </Form.Item>
                        </Col>
                       </Row>
                      </Form>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBContainer>
          </>
        ) : (
          <>
            <h1>User Details</h1> <hr></hr>
            <input value={username} disabled={true} /> <br /> <hr></hr>
            <input value={gmail} disabled={true} />  <br/> <hr></hr>
            <button onClickCapture={logout}>logout user</button>
          </>
        )}
      </div>
    </>
  )
}

export default Login