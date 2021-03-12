import '../App.css';
import { Link, BrowserRouter  as Router } from "react-router-dom";

function Navigation() {
    return (
        <div className="flex justify-between p-4 navBg">
            <Router>
                <div className="flex w-8/12">
                    <div className="sm:w-2/12">Logo</div>
                    <div>    
                        <ul className="flex">
                            <li className="mr-2 cursor-pointer px-1 py-2 ">
                                <Link className="" to="/" exact> Home </Link>
                            </li>
                            <li className="mr-2 cursor-pointer px-1 py-2 ">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="mr-2 cursor-pointer px-1 py-2 ">
                                <Link to="/addProduct">Add Product</Link>
                            </li>
                        </ul>                        
                    </div>
                </div>
                <div className="flex ">
                    <ul className="flex ">
                        <li className="cursor-pointer orangeColor mr-2 px-1 py-2 ">
                            <Link to="/cart" exact>Cart</Link> 
                            <span className="border border-yellow-400 px-1 orangeColor rounded-full">1</span>
                        </li>
                        <li className="cursor-pointer orangeColor border border-yellow-700 px-1 py-2 rounded-sm"><Link to="/account">My account</Link></li>
                    </ul>
                </div>
            </Router>
        </div>
    );
}

export default Navigation;