import "../../App.css";

function singleProduct() {
    return(
        <div class="flex px-10 pt-20 pb-28">
            <div className="w-6/12"></div>
            <div className="w-6/12 p-16">
                <h2 className="text-xl font-semibold text-gray-200">Mafia II</h2>
                <p class="py-10">lfasdflllllllllllljaldfjaslfjasfasfas fasdkfjsalfkjasf safjaslfs </p>
                <div className="flex">
                    <div className="w-6/12 mr-1">
                    <button className="w-full border border-gray-200 text-gray-200 bg-transparent hover:border-gray-500 p-2">Add to cart</button>
                    </div>
                    <div className="w-6/12 ml-1">
                    <button className="w-full border border-gray-200 text-gray-200 bg-transparent hover:border-gray-500 p-2">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default singleProduct;