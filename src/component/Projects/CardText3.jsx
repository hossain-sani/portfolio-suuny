import hockey from "../../assets/hockey.png"


const CardText3 = () => {
    return (
        <div>

            <div className="card bg-base-100 w-auto lg:w-96 h-auto lg:h-[580px] shadow-sm border-2 border-green-600">
                <figure>
                    <img
                        src={hockey}
                        alt="image" className="h-auto lg:h-64 w-full" />
                </figure>
                <div className="card-body justify-around items-stretch">
                    <h2 className="card-title">
                        Hockey
                        <div className="badge badge-secondary">Static</div>
                    </h2>
                    <h1 className="text-xs font-normal ">
                        <span className="text-lg font-bold" > Technologies :  </span>
                        HTML5, CSS3,Tailwind, etc 
                    </h1>

                    <div className="">
                        <h1 className="text-lg font-bold  ">Feature :</h1>
                        <ul className="list-disc text-xs pl-9">
                            <li> static menu, mutiple section</li>
                            <li> Responsive for all device, </li>
                        </ul>
                    </div>
                    <div className="card-actions justify-end  pt-2">
                        <div className="badge badge-outline text-blue-500 hover:bg-blue-500 hover:text-black">
                            <a target="_blank" href="https://hossain-sani.github.io/A03-Hockey/" >view demo</a>
                        </div>
                        <div className="badge badge-outline ">
                             <a target="_blank" href="https://github.com/hossain-sani/A03-Hockey" >Clint</a>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardText3;