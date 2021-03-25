import '../../../../App.css';

function CompanyNav() {
    return (
        <div className="flex px-4 my-3 max-w-full">
            <div className="flex justify-between sm:w-8/12 m-auto py-10">
                <img src="/company/pcgamer.png" className=" sm:h-8 w-2/12 sm:mr-2" alt=""/>
                <img src="/company/ps3.png" className=" sm:h-8 w-2/12 sm:mr-2" alt=""/>
                <img src="/company/ps4.png" className=" sm:h-8 w-2/12 sm:mr-2" alt=""/>
                <img src="/company/wii.png" className=" sm:h-8 w-2/12 sm:mr-2" alt=""/>
                <img src="/company/xbox 360.png" className=" sm:h-8 w-2/12 sm:mr-2" alt=""/>
                <img src="/company/xbox one.png" className=" sm:h-8 w-2/12 sm:mr-2" alt=""/>
            </div>
        </div>
    );
}

export default CompanyNav;