import React,{ useEffect }from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './JS/actions/AuthActions';
import NavBar from './components/Header/NavBar';
import Home from './components/Pages/Home';
import Dashbord from './components/Pages/Dashbord';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Pages/Profile';
import UserList from './components/Admin/UserList';
import EditUser from './components/Admin/Edit';
import ProductDetails from './components/Pages/ProductDetails';
import ManageProduct from './components/Admin/ManageProduct';
import AddProduct from './components/Admin/AddProduct';
import Cart from './components/Pages/Cart';
import Shipping from './components/User/Shipping';
import OrderHistory from './components/User/OrderHistory';
import PlaceOrder from './components/User/PlaceOrder';
import Order from './components/Pages/Order';
import OrderList from './components/Admin/OrderList';
import PrivateRoute from './components/Route/PrivateRoute';
import AdminRoute from './components/Route/AdminRoute';
import './App.css';
import Footer from './components/Footer/Footer';
import ProductList from './components/Pages/ProductList';
import Contact from './components/Pages/Contact';

function App() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser())


  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  },[])
  
  return (
    <>
    <div className="App">
      <NavBar />
      
      <Switch>
            {/* visitor */}
        <Route exact path="/" component= {Home} />     
        <Route exact path="/login" component= {Login} />     
        <Route exact path="/register" component= {Register} />     
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/productlist" component={ProductList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/contact" component={Contact} />
            {/* User && Admin */}
        <Route exact path="/profile/:id" component= {Profile} />
        <Route exact path="/order/:id" component={Order} />
            {/* User */}
        <PrivateRoute exact path="/dashbord" component={Dashbord} />
        <PrivateRoute exact path="/shipping" component={Shipping} />
        <PrivateRoute exact path="/placeorder" component={PlaceOrder} />
        <PrivateRoute exact path="/history" component={OrderHistory} />
            {/* Admin */}
        <AdminRoute exact path="/dashbord" component={Dashbord} />    
        <AdminRoute exact path="/edit/:id" component= {EditUser} />
        <AdminRoute exact path="/users" component={UserList} />
        <AdminRoute exact path="/products" component={ManageProduct} />
        <AdminRoute  path={["/products/edit/:id", "/products/add"]} component={AddProduct} />
        <AdminRoute exact path="/orderlist" component={OrderList} />
     
      </Switch>
      </div>
       
      <Footer />
      
    </>
  );
}

export default App;
