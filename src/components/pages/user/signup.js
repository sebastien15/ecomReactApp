import '../../../App.css';

function Signup() {
    const close = (e)=>{
        e.target.parentNode.parentNode.classList.toggle('hidden')
    }
    return (
        <div className="hidden navBg p-4 sm:p-8 absolute top-1/4 left-5 sm:left-1/3">
            <div className="text-right hover:font-extrabold cursor-pointer" onClick={close}><span className=" text-yellow-600">X</span></div>
            <form>
                <div className="mb-2 flex flex-col ">
                    <label className="mb-2">Username:</label>
                    <input name="usename" className="bg-transparent border-b border-yellow-600" placeholder="username..." />
                </div>
                <div className="mb-2 flex flex-col">
                    <label className="mb-2">password:</label>
                    <input name="password" className="bg-transparent border-b border-yellow-600" placeholder="Password..." />
                </div>
                <div className="mb-2 flex flex-col">
                    <label className="mb-2">Repeat password:</label>
                    <input name="password" className="bg-transparent border-b border-yellow-600" placeholder="repeat password..." />
                </div>
                <button type="submit" className="border border-yellow-600 text-yellow-600 px-2 w-full cursor-pointer hover:bg-yellow-600 hover:text-white">Register</button>
            </form>
            <div className="mb-2">
                You have an account <span className="cursor-pointer text-yellow-600">Login</span>
            </div>
        </div>
    );
}

export default Signup;