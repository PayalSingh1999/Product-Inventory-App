import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.scss';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(()=> {
    const auth = localStorage.getItem('user');
    if(auth) {
      navigate('/')
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password)
    let result = await fetch('http://localhost:5000/login', {
      method:'post',
      body:JSON.stringify({email,password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    // console.log(result);
    if(result.name){
      localStorage.setItem('user',JSON.stringify(result));
      navigate('/')
    } else {
      console.log("data not found");
    }
  }
  return (
    <div>
      <h1>Login component</h1>
      <Form className="loginPage">
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pasword</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </Form.Group>
          <Button 
          variant="primary" 
          type="submit" 
          className="loginPage__button"
          onClick={handleSubmit}>Login</Button>
      </Form>
    </div>
  )
}

export default Login
