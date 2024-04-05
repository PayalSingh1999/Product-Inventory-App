import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.scss'

const ProductList = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=> {
    fetchProducts();
  },[])
  const fetchProducts = async () => {
    let result = await fetch('http://localhost:5000/products');
    result = await result.json();
    setProducts(result);
  }
  const handleDelete = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`,{
      method:'Delete'
    })
    result = await result.json();
    if(result){
      fetchProducts();
    }
  }
  const handleChange = async (e) => {
      let key = e.target.value;
      console.log(key)
      if(key){
        let result = await fetch(`http://localhost:5000/search/${key}`);
        result = await result.json();
        setProducts(result);
      } else {
        fetchProducts();
      }
  }
  return (
    <div className="productList">
      <h1 className="productList__heading">Product List</h1>
      <input type='text' placeholder='Search Product'className="productList__input" onChange={handleChange}/>
      <div className="productList__container">
        <ul>
          <li>S no.</li>
          <li>name</li>
          <li>price</li>
          <li>category</li>
          <li>company</li>
          <li>Operation</li>
        </ul>
        {
          products.length> 0 ? products.map((product,index) => (
            <ul key={product._id}>
              <li>{index +1}</li>
              <li>{product.name}</li>
              <li>{product.price}</li>
              <li>{product.category}</li>
              <li>{product.company}</li>
              <li><button onClick={() =>handleDelete(product._id)}>delete</button>
              <Link to={`/update/${product._id}`}>update</Link></li>
            </ul>
          )) :
          <h1>No Result found</h1>
        }
      </div>
    </div>
  )
}

export default ProductList
