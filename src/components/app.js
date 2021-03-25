import Home from './pages/home/Home';
import Cart from './pages/cart';
import Account from './pages/account';
import Navigation from './Navigation';
import Footer from './Footer';
import AddProduct from './pages/addProduct';
import SingleProduct from './pages/singleProduct';
import Dashboard from './pages/dashboard';
import Login from './pages/user/login';
import Signup from './pages/user/signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState, useEffect} from 'react';

function App (){
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems ] = useState([])
    const addCartItem = (cartItem)=> {
        setCartItems([...cartItems, cartItem])
        console.log(cartItems)
    }
    useEffect(() => {
        const getProducts = async ()=>{
            const productsFromServer = await fetchProducts()

            setProducts(productsFromServer)
        }
        getProducts()
    }, [])
    const fetchProducts = async()=>{
        const res = await fetch('http://localhost:5000/games')
        const data = await res.json()
        return data
    }

    return (
        <div>
            <Router>
                <Navigation cart={cartItems.length}/>
                <Switch>
                <Route exact path="/" component="Home">
                    <Home onAddCartItem={addCartItem} products={products}/>
                </Route>
                <Route exact path="/cart" component="Cart">
                    <Cart />
                </Route>
                <Route exact path="/account" component="Account">
                    <Account />
                </Route>
                <Route exact path="/AddProduct" component="AddProduct">
                    <AddProduct />
                </Route>
                <Route exact path="/SingleProduct" component="SingleProduct">
                    <SingleProduct />
                </Route>
                <Route exact path="/dashboard" component="Dashboard">
                    <Dashboard products={products}/>
                </Route>
                </Switch>
                <Footer />
            </Router>
            <Login />
            <Signup />
        </div>
    )
}

export default App;