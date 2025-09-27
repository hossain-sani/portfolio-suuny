import parcel from "../../assets/parcel.png"

const Card2 = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-auto lg:w-[65%] px-2">
                    <img className=" h-80"
                        src={parcel}
                        alt="Album" />
                </figure>

                <div className="w-auto lg:w-[34%] p-2 space-y-3 ">
                    <h1 className="text-3xl font-bold pt-2 " >Safety Move</h1>

                    <div>
                        <h1 className="text-sm font-normal ">
                            <span className="text-xl font-bold" > Technologies :  </span>
                            HTML5, CSS3,Tailwind, Reactjs, Mongodb, Expressjs, Nodejs, JWT. React packeges etc </h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold ">Feature</h1>
                        <ul className="list-disc text-sm pl-5">
                            <li> Dynamic menu, Instant Availability, parcel entry</li>
                            <li>wishlist & remove Policy in based user, Responsive for all device</li>
                            <li>Comprehensive Dashboard, User Insights, Parcel Bookings, Payment, Admin Controls</li>
                        </ul>
                    </div>

<div className="flex justify-around space-x-3 border-2 border-blue-900 p-2 text-lg uppercase font-semibold rounded-md   " >
    <a target="_blank" href="https://safely-move.web.app/" className="text-blue-800" >view</a>
    <a target="_blank" href="https://github.com/hossain-sani/parcel-management-clint" >Clint</a>
    <a target="_blank" href="https://github.com/hossain-sani/parcel-management-server" >server</a>
</div>


                </div>
            </div>
        </div>
    );
};

export default Card2;