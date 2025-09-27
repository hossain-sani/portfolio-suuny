import blog from "../../assets/blogWebsite.png"

const Card = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-auto lg:w-[65%] px-2">
                    <img className=" h-96"
                        src={blog}
                        alt="Album" />
                </figure>

                <div className="w-auto lg:w-[30%]  space-y-3 ">
                    <h1 className="text-3xl font-bold pt-4 " >Blog Website</h1>

                    <div>
                        <h1 className="text-sm font-normal px-4 pt-2 ">
                            <span className="text-xl font-bold" > Technologies :  </span>
                            HTML5, CSS3,Tailwind, Reactjs, Mongodb, Expressjs, Nodejs, JWT. </h1>
                    </div>
                    <div className="px-4">
                        <h1 className="text-xl font-bold ">Feature</h1>
                        <ul className="list-disc text-sm pl-5">
                            <li> Dynamic menu, Instant Availability, add blog, comment in blog,</li>
                            <li>wishlist & remove Policy in based user, Responsive for all device</li>
                        </ul>
                    </div>

                    <div className=" w-full flex justify-around space-x-3 border-2 border-blue-900 p-2 text-lg uppercase font-semibold rounded-md   " >
                        <a target="_blank" href="https://blog-website-sani42.web.app/" className="text-blue-800" >view</a >
                        <a target="_blank" href="https://github.com/hossain-sani/blog-website-clint" >Clint</a >
                        <a target="_blank" href="https://github.com/hossain-sani/blog-website-server" >server</a >
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Card;