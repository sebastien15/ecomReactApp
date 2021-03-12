import "../App.css";
import {NavLink, BrowserRouter as Router} from "react-router-dom"

function Footer() {
    return(
        <div className="navBg p-8 flex text-gray-200">
            <div className="w-5/12 px-3">
                <h1 className="mb-3 text-xl">TryBe</h1>
                <p className="p-2 font-light">
                    The Lorem Ipsum is simply dummy text 
                    of the composition and layout before printing. 
                    Lorem Ipsum has been the standard dummy 
                    text of printing since the 1500s, when an 
                    anonymous printer assembled pieces of text 
                    together to make a specimen text font book. 
                    It did not only survive five centuries, but also   
                    adapted to computer office automation
                </p>
                <div className="flex">
                    <img src="/fb.png" className="h-8 cursor-pointer" alt="" />
                    <img src="/g+.png" className="h-8 cursor-pointer" alt="" />
                    <img src="/insta.png" className="h-8 cursor-pointer" alt="" />
                    <img src="/tsapp.png" className="h-8 cursor-pointer" alt="" />
                    <img src="/yttube.png" className="h-8 cursor-pointer" alt="" />
                </div>
            </div>
            <div className="w-3/12 px-3">
                <h1 className="mb-3 text-xl">Top Links</h1>
                <Router>
                    <ul>
                        <li><NavLink className="" to="/" exact> Home </NavLink></li>
                        <li><NavLink className="" to="/about"> About </NavLink></li>
                        <li><NavLink className="" to="/contact" > Contact us </NavLink></li>
                        <li><NavLink className="" to="/forum" > Forum </NavLink></li>
                        <li><NavLink className="" to="/community" > Community </NavLink></li>
                    </ul>
                </Router>
            </div>
            <div className="w-4/12 px-3">
                <p className="mb-2">Subscribe To Our NewsLatter</p>
                <form className="flex flex-col">
                    <label className="mb-1">Email</label>
                    <input className="mb-1 border border-gray-500 p-2 py-1 bg-transparent text-gray-200 w-5/12"/>
                    <button type="submit" className="bg-gray-800 hover:bg-gray-900 p-2 w-5/12">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Footer;