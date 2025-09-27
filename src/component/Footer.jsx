import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content items-center m-0 p-4 flex flex-col lg:flex-row">
                <aside className="grid-flow-col items-center">
                <a className=" text-xs lg:text-base uppercase font-bold flex gap-2 items-center">
                        <img className="size-7 lg:size-8 " src={logo} alt="logo" />
                       
                         <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  ">Arafat Hossain Sani</span>
                        </a>
                </aside>
                <div className="text-center mx-auto">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Sunny</p>
                
                </div>
                <nav className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
                <Link  to="https://linkedin.com/in/hossainsani/" > <BsLinkedin className="size-4 lg:size-6 text-[#0A66C2] bg-white rounded" /> </Link>
                    <Link  to="https://github.com/hossain-sani" > <FaGithub className="size-4 lg:size-6  rounded" /> </Link>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;