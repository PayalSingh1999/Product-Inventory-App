import React, { useEffect, useState } from 'react'
import  {Form, Button}  from 'react-bootstrap'
import '../SignUp/SignUp.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=> {
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/')
      }
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setInterval(async () => { await console.log("waiting") }, 2000);
        console.log("name")
        let result = await fetch('http://localhost:5000/register',{
          method:'post',
          body: JSON.stringify({name,email,password}),
          headers:{
            'Content-Type': 'application/json'
          },
        })
        result = await result.json();
        console.warn("data",result)
        localStorage.setItem('user',JSON.stringify(result))
        if(result){
          navigate('/');
        }
    }
  return (
    <div>
      <h1>Register</h1>
      <Form className="signUpPage">
          <Form.Group className="mb-3 signUpPage__form" controlId="formBasicName">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control 
              placeholder="Enter name" 
              type="text" 
              className="signUpPage__input" 
              value={name} 
              onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3 signUpPage__form" controlId="formBasicEmail">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control 
              placeholder="Enter email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3 signUpPage__form" controlId="formBasicPassword">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control 
              placeholder="Enter Password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Button 
          variant="primary" 
          type="submit" 
          className="signUpPage__button"
          onClick={handleSubmit}>
             Submit
          </Button>
      </Form>
      {/* <input type='text' placeholder='Enter name'/>
      <input type='email' placeholder='Enter email'/>
      <input type='password' placeholder='Enter a password'/> */}
    </div>
  )
}

export default SignUp
