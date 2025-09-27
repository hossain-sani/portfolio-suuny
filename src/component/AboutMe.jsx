

import { useEffect, useState } from "react";
import sunnyImg from "../assets/sani_long.png";
import Education from "./AboutMe/Education";
import { motion } from "framer-motion";
import SkillPanelAnimation from "./AboutMe/SkilPanelAnimation";
import Journey from "./AboutMe/Journey";
import { FaLightbulb, FaPaintBrush, FaGamepad, FaGithub, FaRss, FaLaptopCode, FaUsers, FaGlobeAmericas, FaCogs } from "react-icons/fa";

const categories = ['Front-end', 'Back-end', 'Tools', 'Soft Skill'];

const AboutMe = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % categories.length);
        }, 1600); // 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-black dark:text-gray-200">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",

                    }}
                    viewport={{ once: true, amount: 0.15 }} // triggers once when 20% is visible
                    className="w-auto lg:w-[20%] text-3xl lg:text-4xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 " >About

                    <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> me</span>
                </motion.h1>

            </div>

            {/* first part */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12  pt-10">
                {/* left */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.15 }} // triggers once when 20% is visible

                    className="w-[95%] lg:w-[40%]">
                    <img src={sunnyImg} alt="sani image" className="border-2 border-cyan-700 rounded-xl px-5 " />
                </motion.div>
                {/* right */}
                <div className="w-[95%] lg:w-[60%] ">
                    {/* text  */}
                    <div className="text-start text-sm">

                        <p>
                            A dedicated Frontend React Developer passionate about creating dynamic and responsive web applications. With a solid foundation in MongoDB, Express.js, React, JavaScript ,Node.js, & Next JS . I bring a comprehensive approach to building full-stack solutions.
                            <br />
                            <br />

                            I consider myself a quick learner, self-motivated, responsible, and disciplined person who can work under pressure and solve problems in critical situations with analytical knowledge and the latest technology.
                        </p>
                    </div>

                    {/* skill */}
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold border-dashed border-b-2 pb-2">Technical
                            <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> Proficiency</span>
                        </h1>
                        <div>
                            {/* <h1>Front-End</h1> */}
                            <SkillPanelAnimation category={categories[activeIndex]} />
                        </div>
                    </div>

                </div>
            </div>

            {/* second part  */}
            <div className="mt-9">

                <h1 className="text-2xl border-dashed border-b-2 pb-2 w-auto lg:w-[29%] -tracking-widest lg:tracking-normal ">Education
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-widest  "> Qualifications</span>
                </h1>
                <div className="mt-9 text-2xl" >
                    <Education></Education>
                </div>

            </div>

            {/* My Journey Section */}
            <Journey />

            {/* My Philosophy Section */}
            <div className="mt-9">
                <h1 className="text-2xl border-dashed border-b-2 pb-2 w-auto lg:w-[25%] -tracking-widest lg:tracking-normal">My
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-widest"> Philosophy</span>
                </h1>
                <div className="mt-9 text-sm">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-start space-x-4 p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg mb-4 border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
                    >
                        <FaLightbulb className="text-3xl text-yellow-400 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Clean and Efficient Code</h3>
                            <p>I believe that writing clean, efficient, and maintainable code is the foundation of any successful project. I strive to follow best practices and coding standards to ensure the quality of my work.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-start space-x-4 p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
                    >
                        <FaPaintBrush className="text-3xl text-pink-500 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">User-Centric Design</h3>
                            <p>I am passionate about creating intuitive and engaging user experiences. I focus on understanding the needs of the end-users to build applications that are not only functional but also enjoyable to use.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-start space-x-4 p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg mt-4 border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
                    >
                        <FaCogs className="text-3xl text-gray-500 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Sustainable Development</h3>
                            <p>I prioritize building robust and scalable solutions that are easy to maintain and integrate within larger systems. My goal is to deliver long-term value and contribute effectively to team-driven projects.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Interests & Hobbies Section */}
            <div className="mt-9">
                <h1 className="text-2xl border-dashed border-b-2 pb-2 w-auto lg:w-[30%] -tracking-widest lg:tracking-normal">Interests & 
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-widest"> Hobbies</span>
                </h1>
                <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
                    >
                        <FaGamepad className="text-5xl text-purple-500 mb-4" />
                        <h3 className="text-xl font-bold">Gaming</h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
                    >
                        <FaGithub className="text-5xl text-gray-700 dark:text-gray-300 mb-4" />
                        <h3 className="text-xl font-bold">Open Source</h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
                    >
                        <FaRss className="text-5xl text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold">Tech Blogs</h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
                    >
                        <FaLaptopCode className="text-5xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold">Side Projects</h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
                    >
                        <FaUsers className="text-5xl text-green-500 mb-4" />
                        <h3 className="text-xl font-bold">Time with Friends</h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
                    >
                        <FaGlobeAmericas className="text-5xl text-indigo-500 mb-4" />
                        <h3 className="text-xl font-bold">Exploring & Travel</h3>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
