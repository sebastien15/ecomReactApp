import '../../../../App.css';

function Banner() {
    return (
        <div className="flex px-4 ">
            <div className="hidden sm:flex flex-col w-4/12 navBg px-3 pt-4 text-left">
                <div className="search">
                    <form>
                        <input name="search..." className="p-2 text-sm bg-transparent w-full focus:border-0 hover:border-0"/>
                    </form>
                </div>
                <div className="flex flex-col justify-space-around text-left ">
                    <ul className="mb-4 pt-3">
                        <li className="mb-1 cursor-pointer">News</li>
                        <li className="mb-1 cursor-pointer">Games</li>
                        <li className="mb-1 cursor-pointer">Gear</li>
                        <li className="mb-1 cursor-pointer">About</li>
                    </ul>
                    <ul>
                        <li className="mb-1 cursor-pointer">Login</li>
                        <li className="cursor-pointer">Register</li>
                    </ul>
                </div>
            </div>
            <div className="w-full sm:w-8/12">
                <video controls autoplay className="w-full max-h-full">
                    <source src="https://vod-progressive.akamaized.net/exp=1614877412~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2838%2F16%2F414190381%2F1781722552.mp4~hmac=45cd742be7238fcdda92e2a827d03811f0d76c682d6cc6e6ecaf3034a1dc0443/vimeo-prod-skyfire-std-us/01/2838/16/414190381/1781722552.mp4?filename=production+ID%3A4291570.mp4" type="video/mp4">
                    </source>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Banner;