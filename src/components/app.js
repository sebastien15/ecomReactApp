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
    const deleteProduct = async (id)=>{
        await fetch(`http://localhost:5000/games/${id}`,{
            method: 'DELETE',
        })
        const products = await fetchProducts()
        setProducts(products)
    }
    return (
        <div>
            <Router>
                <Navigation cart={cartItems.length}/>
                <Switch>
                    <Route exact path="/" component="Home">
                        <Home onAddCartItem={addCartItem} products={products}/>
                    </Route>
                    <Route path="/cart" component="Cart">
                        <Cart />
                    </Route>
                    <Route path="/account" component="Account">
                        <Account />
                    </Route>
                    <Route path="/AddProduct" component="AddProduct">
                        <AddProduct />
                    </Route>
                    <Route path="/SingleProduct" component="SingleProduct">
                        <SingleProduct />
                    </Route>
                    <Route path="/dashboard" component="Dashboard">
                        <Dashboard products={products} deleteProduct={deleteProduct}/>
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