import '../../../../App.css';

function Banner() {
    return (
        <div className="flex px-4 h-96">
            <div className="w-4/12 navBg px-3 pt-4">
                <div className="search ">
                    search space
                </div>
                <div className="flex flex-col justify-space-around">
                    <ul className="mb-4 pt-3">
                        <li className="mb-1">News</li>
                        <li className="mb-1">Games</li>
                        <li className="mb-1">Gear</li>
                        <li className="mb-1">About</li>
                    </ul>
                    <ul>
                        <li className="mb-1">Login</li>
                        <li className="">Register</li>
                    </ul>
                </div>
            </div>
            <div className="w-8/12">
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