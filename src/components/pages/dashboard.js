import "../../App.css";
import { useState } from 'react'

function Dashboard({products}) {
    return (
        <div className="flex">
            <div className="navBg w-9/12 sm:w-3/12 h-screen pt-8 pl-4">
                <ul className="p-2">
                    <li className="mb-2 cursor-pointer hover:text-yellow-600">Dashboard</li>
                    <li className="mb-2 cursor-pointer hover:text-yellow-600">Products
                        <ul className="pl-2">
                            <li>products</li>
                            <li>Featured</li>
                            <li>Add product</li>
                        </ul>
                    </li>
                    <li className="mb-2 cursor-pointer hover:text-yellow-600">Customers</li>
                    <li className="mb-2 cursor-pointer hover:text-yellow-600">Payment</li>
                </ul>
            </div>
            <div className="p-4 pt-8 w-full">
                <table className="w-10/12 m-auto">
                    <thead className="w-full mb-5">
                        <tr className="w-full">
                            <td>Id</td>
                            <td>Name</td>
                            <td>Image</td>
                            <td>stock</td>
                            <td>sold</td>
                            <td>featured</td>
                            <td>tags</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {products.length > 0 ? 
                            products.map((product)=>(
                                <tr key={product.id} className=" w-full mb-3">
                                    <td className="mb-4">{product.id}</td>
                                    <td>{product.name}</td>
                                    <td className="">
                                        <img src={`/games/${product.fImage}`} alt="" className="h-7 w-12"/>
                                    </td>
                                    <td>45</td>
                                    <td>12</td>
                                    <td>yes</td>
                                    <td>sports</td>
                                    <td className="flex">
                                        <a href="edit" className="border border-yellow-600 text-yellow-600 bg-transparent mr-2 hover:text-white hover:bg-yellow-600 cursor-pointer p-1 px-3">Edit</a>
                                        <button className="border border-red-600 text-red-600 bg-transparent mr-2 hover:text-white hover:bg-red-600 cursor-pointer p-1 px-3">Delete</button>
                                    </td>
                                </tr>
                            )) : "No products available"
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;

