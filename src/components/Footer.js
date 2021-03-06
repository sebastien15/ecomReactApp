import "../App.css";
import {Link} from "react-router-dom"
import { useState } from 'react'

function Footer() {
    const [ email, setEmail ] = useState('')
    const onsubmit = (e) =>{
        e.preventDefault();
        if(!email) {
            alert ('please add your email')
            return
        }
        addEmail({email})
        setEmail('')
    }
    const addEmail = async (product) =>{
        const res = await fetch('http://localhost:5000/email',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await res.json()
        setEmail ([...email, data])
    }

    return(
        <div className="navBg p-2 pt-5 sm:p-8 flex flex-col sm:flex-row text-gray-200">
            <div className="sm:w-5/12 px-3 mb-5">
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
            <div className="sm:w-3/12 px-3 mb-5">
                <h1 className="mb-3 text-xl">Top Links</h1>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/about"> About </Link></li>
                    <li><Link to="/contact"> Contact us </Link></li>
                    <li><Link to="/forum" > Forum </Link></li>
                    <li><Link to="/community" > Community </Link></li>
                </ul>
            </div>
            <div className="sm:w-4/12 px-3">
                <p className="mb-2">Subscribe To Our NewsLatter</p>
                <form className="flex flex-col" onSubmit={onsubmit}>
                    <label className="mb-1">Email</label>
                    <input className="mb-1 border border-gray-500 p-2 py-1 bg-transparent text-gray-200 sm:w-5/12"
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    <button type="submit" className="bg-gray-800 hover:bg-gray-900 p-2 sm:w-5/12">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Footer;