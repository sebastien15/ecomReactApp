import '../App.css';
import { Link, BrowserRouter  as Router } from "react-router-dom";

function Navigation({cart}) {
    const openNav = ()=>{
        const topLine = document.querySelector('.tpLine')
        const middleLine = document.querySelector('.mdLine')
        const bottomLine = document.querySelector('.btLine')
        const navigations = document.querySelectorAll('.navigations')
        const classestop = ['transform','rotate-45','transition-all','duration-100','ease-out']
        const classesbottom = ['transform','-rotate-45','-translate-y-2','transition-all','duration-100','ease-out']
        classestop.map(v=> topLine.classList.toggle(v))
        classesbottom.map(v=> bottomLine.classList.toggle(v))
        middleLine.classList.toggle('hidden')
        navigations.forEach(element => {
            element.classList.toggle('hidden')
        });
    }
    return (
        <div className="flex flex-col sm:flex-row justify-between p-4 navBg">
            <Router>
                <div className="flex flex-col sm:flex-row sm:w-8/12">
                    <div className="flex justify-between sm:w-2/12 w-full">
                        <div className=" text-yellow-600 font-bold text-2xl">TryBe</div>   
                        <div className="mt-auto sm:hidden" onClick={openNav}>
                            <div className="h-1 w-8 bg-yellow-600 mb-1 tpLine"></div>
                            <div className="h-1 w-8 bg-yellow-600 mb-1 mdLine"></div>
                            <div className="h-1 w-8 bg-yellow-600 mb-1 btLine"></div>
                        </div>
                    </div>
                    <ul className="hidden sm:flex flex-col sm:flex-row navigations ">
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
                <div className="">
                    <ul className="hidden sm:flex flex-col sm:flex-row navigations">
                        <li className="cursor-pointer orangeColor mr-2 px-1 py-2">
                            <Link to="/cart" exact>Cart</Link> 
                            <span className="border border-yellow-400 px-1 orangeColor rounded-full ml-1">{cart}</span>
                        </li>
                        <li className="cursor-pointer orangeColor border border-yellow-700 px-1 py-2 rounded-sm"><Link to="/account">My account</Link></li>
                    </ul>
                </div>
            </Router>
        </div>
    );
}

export default Navigation;