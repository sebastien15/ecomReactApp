import Home from './pages/home/Home';
import Cart from './pages/cart';
import Account from './pages/account';
import Navigation from './Navigation';
import Footer from './Footer';
import AddProduct from './pages/addProduct';
import SingleProduct from './pages/singleProduct';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function Routes (){
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
                <Route path="/AddProduct">
                    <AddProduct />
                </Route>
                <Route path="/SingleProduct">
                    <SingleProduct />
                </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Routes;