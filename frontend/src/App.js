import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import AddProduct from './pages/AddProduct/AddProduct';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import Logout from './pages/Logout/Logout';
import Profile from './pages/Profile/Profile';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import Login from './components/Login/Login';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path="/" element={<ProductList/>}></Route>
            <Route path="/add" element={<AddProduct/>}></Route>
            <Route path="/update/:id" element={<UpdateProduct/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
          </Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
