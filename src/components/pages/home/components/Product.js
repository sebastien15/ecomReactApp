import '../../../../App.css';

function Product ({ onAddCartItem, products }) {
   

    // const addToCart = (id)=>{
    //     console.log(`the id is ${id}`)
    //     addCartItem(id)
    //     return
    // }
    const buyNow = (e)=>{
        alert('buying now')
        return
    }
    const onMouseOver = (e)=>{
        e.target.parentNode.nextSibling.classList.replace('hidden','flex')
        return
    }
    const onMouseOut = (e) =>{
        e.target.parentNode.nextSibling.classList.replace('flex','hidden')
        return
    }
    return(
        <div className="flex flex-wrap w-9/12 m-auto mb-10">
            <div className=" mb-4 w-12/12 sm:w-6/12 md:w-3/12 flex flex-col content-center text-center pl-1">
                <div className="navBg py-4">
                    <img src="/icon.png" alt="" className="m-auto w-20 h-28 mb-7"/>
                    <h5>Top Games</h5>
                </div>
            </div>
            {
            products.length > 0 ?
            products.map((product)=>(
            <div key={product.id} className="mb-4 w-12/12 sm:w-6/12 md:w-3/12 flex flex-col content-center pl-1 cursor-pointer relative">
                <div className="navBg h-full " onMouseOver={onMouseOver} onMouseLeave = {onMouseOut} >
                    <img src={`/games/${product.fImage}`} alt="" className="mb-3 min-w-full min-h-full" />
                </div>
                <div className="bg-black w-56 h-4/5 cursor-pointer bg-opacity-75 absolute hidden justify-center top-6 left-4 cartToogle">
                    <button onClick= {()=>{onAddCartItem(product.id)}} className="p-2 pt-1 border border-yellow-600 h-8 my-auto mr-1 hover:bg-yellow-600 hover:text-white">Add to cart</button>
                    <button onClick={buyNow} className="p-2 pt-1 border border-gray-200 h-8 my-auto hover:bg-gray-200 hover:text-gray-800">Buy now</button>
                </div>
            </div>
            )): "no products available"
            }
        </div>
    )
}

export default Product;