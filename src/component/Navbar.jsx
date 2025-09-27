import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="">
            <div className="navbar text-white  bg-cyan-500 px-1 lg:px-12   ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 font-bold text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/projects" > Projects</NavLink></li>
                            <li><NavLink to="/about" >About</NavLink></li>
                            <li><NavLink to="/contact-me" >Contact</NavLink></li>
                        </ul>
                    </div>
                    <a className="pl-1 lg:pl-5 text-xs lg:text-xl uppercase font-bold flex gap-2 items-center">
                        <img className="size-7 lg:size-8 " src={logo} alt="logo" />
                         
                         <span className= "hidden lg:block bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">Arafat Hossain</span> Sani </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/projects" > Projects</NavLink></li>
                            <li><NavLink to="/about" >About</NavLink></li>
                            <li><NavLink to="/contact-me" >Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    
                    <Link  to="https://linkedin.com/in/hossainsani/" > <BsLinkedin className="size-4 lg:size-7 text-[#0A66C2] bg-white rounded" /> </Link>
                    <Link  to="https://github.com/hossain-sani" > <FaGithub className="size-4 lg:size-7" /> </Link>
                   

                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;