import hockey from "../../assets/hockey.png"

const Card3 = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-auto lg:w-[65%] px-2">
                    <img className=" h-96"
                        src={hockey}
                        alt="Album" />
                </figure>

                <div className="w-auto lg:w-[34%] p-2 space-y-3 ">
                    <h1 className="text-3xl font-bold pt-4 pl-5 " >Hockey</h1>

                    <div className="px-4 py-8">
                        <div>
                            <h1 className="text-sm font-normal ">
                                <span className="text-xl font-bold" > Technologies :  </span>
                                HTML5, CSS3,Tailwind, etc </h1>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold ">Feature</h1>
                            <ul className="list-disc text-sm pl-5">
                                <li> static menu, mutiple section</li>
                                <li> Responsive for all device, </li>

                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-around space-x-3 border-2 border-blue-900 p-2 text-lg uppercase font-semibold rounded-md   " >
                        <a target="_blank" href="https://hossain-sani.github.io/A03-Hockey/" className="text-blue-800" >view</a>
                        <a target="_blank" href="https://github.com/hossain-sani/A03-Hockey" >Clint</a>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Card3;