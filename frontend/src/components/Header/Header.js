import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../Header/Header.scss'
import '../../images/homelogo.png'

const Header = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/signup')
    }
  return (
    <div className="headerPage">
        <img className="headerPage__logo" src="https://images-platform.99static.com//9vHd_q1rA6gbihKoJZSQvP-mdDs=/349x775:1050x1476/fit-in/500x500/99designs-contests-attachments/72/72046/attachment_72046841"/>
        {
            auth ? 
            <ul className="headerPage__container">
              <>
                <li className="headerPage__list">
                    <Link to ="/" className="headerPage__link">Products</Link>
                </li>
                <li className="headerPage__list">
                    <Link to ="/add" className="headerPage__link">Add Product</Link>
                </li>
                <li className="headerPage__list">
                    <Link to ="/update" className="headerPage__link">Update Product</Link>
                </li>
                <li className="headerPage__list">
                    <Link to ="/profile" className="headerPage__link">Profile</Link>
                </li>
                <li className="headerPage__list">
                    <Link onClick={handleLogout} to ="/signup" className="headerPage__link">Logout ({JSON.parse(auth).name})</Link>
                </li>
              </>
            </ul>
               :
               <ul className="headerPage__container headerPage__right">
                <li className="headerPage__list"><Link to ="/signup" className="headerPage__link">SignUp</Link></li>
                <li className="headerPage__list"><Link to ="/login" className="headerPage__link">Login</Link></li>
               </ul>
          }
    </div>
  )
}

export default Header
