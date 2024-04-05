import React, { useEffect, useState } from 'react'
import '../UpdateProduct/UpdateProduct.scss';
import  {Form, Button}  from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';


const UpdateProduct = () => {
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [category,setCategory] = useState('');
  const [company,setCompany] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=> {
    fetchProduct();
  },[])



  const fetchProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`)
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  }

  const updateProduct = async (e) => {
    e.preventDefault();
    // console.log(name,price,category,company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
      method:'Put',
      body:JSON.stringify({name,price,category,company}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result = await result.json();
    navigate('/')
  }
  return (
    <div className="updateProducts">
      <h1>Add product</h1>
      <Form className="updateProducts__container">
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product name" value={name} onChange={(e)=> setName(e.target.value)} className="updateProducts__input"/>
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="text" placeholder="Enter product price" value={price} onChange={(e)=> setPrice(e.target.value)} className="updateProducts__input"/>
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Product Category</Form.Label>
              <Form.Control type="text" placeholder="Enter product price" value={category} onChange={(e)=> setCategory(e.target.value)} className="updateProducts__input"/>
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCompany">
              <Form.Label>Product Company</Form.Label>
              <Form.Control type="text" placeholder="Enter product company" value={company} onChange={(e)=> setCompany(e.target.value)} className="updateProducts__input"/>
              
          </Form.Group>
          <Button 
          variant="primary" 
          type="submit" 
          className="updateProducts__button"
          onClick={updateProduct}>Update Product</Button>
      </Form>
    </div>
  )
}

export default UpdateProduct
