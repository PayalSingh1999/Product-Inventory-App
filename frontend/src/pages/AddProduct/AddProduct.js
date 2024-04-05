import React, { useState } from 'react'
import '../AddProduct/AddProduct.scss'
import  {Form, Button}  from 'react-bootstrap'

const AddProduct = () => {
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [category,setCategory] = useState('');
  const [company,setCompany] = useState('');
  const [error,setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name,price,category,company);
    if(!name || !price || !category || !company) {
      setError(true);
    }
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    if(name && price && category && company){
    let result = await fetch('http://localhost:5000/add-product',{
      method:'post',
      body:JSON.stringify({name,price,category,company,userId}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    console.log("result",result);
    setName('');
    setPrice('');
    setCategory('');
    setCompany('');
  }
  }
  return (
    <div className="addProducts">
      <h1>Add product</h1>
      <Form className="addProducts__container">
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product name" value={name} onChange={(e)=> setName(e.target.value)} className="addProducts__input"/>
              { error && !name && <Form.Text className="addProducts__error"> 
               Please enter product name
              </Form.Text> }
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="text" placeholder="Enter product price" value={price} onChange={(e)=> setPrice(e.target.value)} className="addProducts__input"/>
              {error && !price && <Form.Text className="addProducts__error">
               Please enter product price
              </Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Product Category</Form.Label>
              <Form.Control type="text" placeholder="Enter product price" value={category} onChange={(e)=> setCategory(e.target.value)} className="addProducts__input"/>
              {error && !category && <Form.Text className="addProducts__error">
               Please enter product category
              </Form.Text> }
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCompany">
              <Form.Label>Product Company</Form.Label>
              <Form.Control type="text" placeholder="Enter product company" value={company} onChange={(e)=> setCompany(e.target.value)} className="addProducts__input"/>
              {error && !company && <Form.Text className="addProducts__error">
               Please enter product company
              </Form.Text>}
          </Form.Group>
          <Button 
          variant="primary" 
          type="submit" 
          className="laddProducts__button"
          onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  )
}

export default AddProduct
