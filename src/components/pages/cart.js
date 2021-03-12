import '../../App.css';

function Cart() {
    return (
        <div className="flex flex-col sm:p-8 h-96">
            <table className="w-9/12 m-auto ">
                <thead className="navBg">
                    <tr className="">
                        <td className="p-3">Items</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>  </td>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="border-b border-gray-500">
                        <td className="p-3">1</td>
                        <td>2</td>
                        <td>
                            <span className="border border-gray-500 rounded-tl-sm rounded-bl-sm px-2 py-1 cursor-pointer">-</span>
                            <span className="border border-gray-500 px-2 py-1">1</span>
                            <span className="border border-gray-500 rounded-tr-sm rounded-br-sm px-2 py-1 cursor-pointer">+</span>
                        </td>
                        <td>200</td>
                        <td>
                            <button>X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-end w-9/12 m-auto">
                <button className="px-3 py-2 border border-gray-500">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default Cart;