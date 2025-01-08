
import './App.css';
import './Components/Footer.css'
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import  Orders  from './pages/Orders';
import  Products  from './pages/Products';
import  WishList  from './pages/WishList';
import ProductCart from './pages/ProductCart'
import SearchBar from './Components/SearchBar';
import ProductItem from './pages/ProductItem';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { PlaceOrder } from './pages/PlaceOrder';
import AccountPage from './pages/AccountPage';




function App() {
  return (
<>
<div className='container' >
  <ToastContainer/>
<NavBar/>
<SearchBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/contact-us' element={<ContactUs/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/products/:productsId' element={< ProductItem/>}/>
    <Route path='/wishlist' element={<WishList/>}/>
    <Route path='/account' element={<AccountPage/>}/>
    <Route path='/place-order' element={<PlaceOrder/>}/>
    <Route path='/product-cart' element={<ProductCart/>}/>
  </Routes>
<Footer/>
</div>
</>
  );
}

export default App;
