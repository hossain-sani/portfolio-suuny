// import { BsLinkedin } from "react-icons/bs";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMapLocationDot, FaPhoneVolume, FaCode, FaLaptopCode, FaServer, FaDesktop, FaPlug, FaBolt } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const ContactMe = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c258c0f4-9700-423f-bc2b-68694d1b3be7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className="text-black dark:text-gray-200 pb-10 ">
      <div>
        <h1 className="w-auto  lg:w-[30%] text-2xl lg:text-4xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 ">
          Get
          <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> in Touch</span>
        </h1>
      </div>

      <div>
        <div className="border-2 border-gray-700 p-0 lg:p-10 rounded-md w-auto lg:w-[90%] mx-auto mt-14 ">
          {/* <h1 className="text-xl lg:text-3xl font-bold mb-7">
            Contact Me For More Info{" "}
          </h1> */}


          <div className="w-full mx-auto  flex flex-col lg:flex-row gap-5 justify-between">

          
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2.5,
                ease: "easeOut",

              }}
              viewport={{ once: true, amount: 0.15 }} // triggers once when 20% is visible

              className="w-full space-y-3 pt-4 ">

              <div className="space-y-0.5 p-4 gap-2 border-2 border-gray-200 rounded-md bg-[#FDDD5F1A] transition-all duration-300 hover:shadow-lg hover:scale-105">
                <FaPhoneVolume className="text-green-800 size-7 lg:size-11" />
                <p className="font-thin text-xs lg:text-sm   ">Phone Number :</p>
                <p className="text-base lg:text-lg">(+880) 1601707200 <span className="font-thin text-xs">(whatsapp)</span></p>
              </div>
              <div className="space-y-0.5 p-4 gap-2 border-2 border-gray-200 rounded-md bg-[#2d75222b] transition-all duration-300 hover:shadow-lg hover:scale-105">
                <MdEmail className="text-yellow-700 size-7 lg:size-11" />
                <p className="font-thin text-xs lg:text-sm  ">Email :</p>
                <p className="text-base lg:text-lg" >sunnycse03@gmail.com</p>
              </div>
              <div className="space-y-0.5 p-4 gap-2 border-2 border-gray-200 rounded-md bg-[#629CF31A] transition-all duration-300 hover:shadow-lg hover:scale-105">
                <FaMapLocationDot className="text-black dark:text-gray-300 size-7 lg:size-11" />
                <p className="font-thin text-xs lg:text-sm  ">Location :</p>
                <p className="text-base lg:text-lg">Nabinagar, Savar, Dhaka</p>
              </div>


              <div className=" pt-3 flex justify-center gap-6">
                <Link to="https://linkedin.com/in/-sunny">
                  {" "}
                  <BsLinkedin className="size-4 lg:size-8 text-[#0A66C2] bg-white rounded" />{" "}
                </Link>
                <Link to="https://github.com/ah-sunny">
                  {" "}
                  <FaGithub className="size-4 lg:size-8" />{" "}
                </Link>
              </div>
              <p className="font-mono text-sm flex justify-center tracking-[.35em]">Connect with me </p>
            </motion.div>

            {/* contact for */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2.5,
                ease: "easeOut",

              }}
              viewport={{ once: true, amount: 0.15 }} // triggers once when 20% is visible

              className="w-full  border-t-4 rounded-3xl border-red-900  p-3">
              <div className="hero  text-black">
                <div className="card bg-base-200 w-full shrink-0 shadow-2xl">


                  <form onSubmit={onSubmit} className="card-body ">
                    <h1 className="text-3xl lg:text-4xl mb-10 text-black ">Send Message</h1>
                    <div className="form-control  mb-2.5 text-black ">
                      <label className="label">
                        <span className="label-text text-sm lg:text-md text-sky-600 ">Full Name : </span>
                      </label>
                      <label className="floating-label mt-2  ">
                        <span >Name</span>
                        <input type="text" name="name" placeholder="type your name" className="input w-full  border-b-4 focus:outline-none " required />
                      </label>
                    </div>

                    <div className="form-control mb-2.5 text-black  ">
                      <label className="label">
                        <span className="label-text text-md text-sky-600 ">Email Address : </span>
                      </label>
                      <label className="floating-label mt-2 ">
                        <span className=" ">Your Mail</span>
                        <input type="text" name="email" placeholder="mail@site.com" className="input  border-b-4 w-full focus:outline-none " required />
                      </label>
                    </div>

                    <div className="form-control mb-4 text-black ">
                      <label className="label">
                        <span className="label-text text-md text-sky-600 ">Your Message : </span>
                      </label>
                      <label className="floating-label mt-2  ">
                        <span >message</span>
                        <textarea
                          rows="4"
                          name="message"
                          placeholder="Type your text here..."
                          className="textarea textarea-bordered border-b-4  w-full focus:outline-none " required
                        ></textarea>
                        {/* <input type="text" placeholder="type your message" className="textarea h-36 input input-lg focus:outline-none " /> */}
                      </label>
                    </div>
                    <div className="form-control">
                      <button type="submit" className="btn btn-primary">send</button>
                    </div>
                  </form>
                  <span>{result}</span>
                </div>
              </div>
            </motion.div>



          </div>
        </div>
      </div>

      {/* Service Offerings Section */}
      <div className="mt-20">
        <h1 className="w-auto lg:w-[30%] text-2xl lg:text-4xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 ">
          My
          <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg text-center border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
          >
            <FaCode className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
            <p className="text-sm">Building end-to-end web applications using modern technologies.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg text-center border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
          >
            <FaLaptopCode className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
            <p className="text-sm">Crafting engaging and responsive user interfaces with React and modern CSS frameworks.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg text-center border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
          >
            <FaServer className="text-5xl text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
            <p className="text-sm">Developing robust server-side logic and APIs with Node.js and Express.js.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg text-center border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
          >
            <FaDesktop className="text-5xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Responsive Web Design</h3>
            <p className="text-sm">Ensuring seamless user experience across all devices and screen sizes.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg text-center border-2 border-transparent transition-all duration-300 hover:border-cyan-400"
          >
            <FaPlug className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">API Development & Integration</h3>
            <p className="text-sm">Building and integrating robust APIs for seamless data flow.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg text-center border-2 border-transparent transition-all duration-300 hover:border-cyan-400">
            <FaBolt className="text-5xl text-cyan-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
            <p className="text-sm">Optimizing web applications for speed and efficiency.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
