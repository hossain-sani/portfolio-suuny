import blog from "../../assets/blogWebsite.png"

const CardText = () => {
    return (
        <div>

            <div className="card bg-base-100 w-auto lg:w-96 h-auto lg:h-[580px] shadow-sm border-2 border-green-600">
                <figure>
                    <img
                        src={blog}
                        alt="image"
                        className="h-auto lg:h-64 w-full" />
                </figure>
                <div className="card-body flex justify-around items-stretch ">
                    <h2 className="card-title">
                        Blog Website
                        <div className="badge badge-secondary">dynamic</div>
                    </h2>
                    <h1 className="text-xs font-normal ">
                        <span className="text-lg font-bold" > Technologies :  </span>
                        HTML5, CSS3,Tailwind, Reactjs, Mongodb, Expressjs, Nodejs, JWT.
                    </h1>

                    <div className="">
                        <h1 className="text-lg font-bold  ">Feature :</h1>
                        <ul className="list-disc text-xs pl-9">
                            <li> Dynamic menu, Instant Availability, add blog, comment in blog,</li>
                            <li>wishlist & remove Policy in based user, Responsive for all device</li>
                        </ul>
                    </div>
                    <div className="card-actions justify-end pt-2">
                        <div className="badge badge-outline text-blue-500 hover:bg-blue-500 hover:text-black">
                            <a target="_blank" href="https://blog-website-sani42.web.app/" >view demo</a >
                        </div>
                        <div className="badge badge-outline ">
                            <a target="_blank" href="https://github.com/hossain-sani/blog-website-clint" >Clint</a >
                        </div>
                        <div className="badge badge-outline">
                             <a target="_blank" href="https://github.com/hossain-sani/blog-website-server" >server</a >
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardText;