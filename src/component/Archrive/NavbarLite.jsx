import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NavbarLite = () => {
    const navItemClass = ({ isActive }) =>
        `px-2 py-1  transition-all duration-200 font-semibold ${isActive ? " text-white border-b-2 border-blue-900" : "text-white"
        } hover:border-b-2 hover:text-base`;


    return (
        <div>
            <div className="navbar bg-cyan-500  px-1 lg:px-12 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li><NavLink to="/" className={navItemClass}>Home</NavLink></li>
                            <li><NavLink to="/projects" className={navItemClass}>Projects</NavLink></li>
                            <li><NavLink to="/about" className={navItemClass}>About</NavLink></li>
                            <li><NavLink to="/contact-me" className={navItemClass}>Contact</NavLink></li>
                        </ul>
                    </div>

                    <motion.a
                        initial={{ opacity: 0, x: -50 }} // start from below and invisible
                        animate={{ opacity: 1, x: 0 }}   // end at original position, visible
                        transition={{
                            duration: 1.1,
                            ease: "easeOut",

                        }}

                        className="pl-1 lg:pl-5 text-xs lg:text-xl uppercase font-bold flex gap-2 items-center">
                        <img className="size-7 lg:size-8" src={logo} alt="logo" />
                        <span className="hidden lg:block bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
                            Arafat Hossain
                        </span>
                        Sani
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -30 }} // start from below and invisible
                    animate={{ opacity: 1, y: 0 }}   // end at original position, visible
                    transition={{
                        duration: 1.1,
                        ease: "easeOut",

                    }}

                    className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/" className={navItemClass}>Home</NavLink></li>
                        <li><NavLink to="/projects" className={navItemClass}>Projects</NavLink></li>
                        <li><NavLink to="/about" className={navItemClass}>About</NavLink></li>
                        <li><NavLink to="/contact-me" className={navItemClass}>Contact</NavLink></li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }} // start from below and invisible
                    animate={{ opacity: 1, x: 0 }}   // end at original position, visible
                    transition={{
                        duration: 1.1,
                        ease: "easeOut",

                    }}
                    className="navbar-end gap-3">
                    {/* theme controller  */}
                    <ThemeToggle></ThemeToggle>

                    <Link to="https://linkedin.com/in/hossainsani/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="size-4 lg:size-7 text-[#0A66C2] bg-white rounded" />
                    </Link>
                    <Link to="https://github.com/hossain-sani" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="size-4 lg:size-7" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NavbarLite;
