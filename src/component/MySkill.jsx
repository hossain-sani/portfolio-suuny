
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const MySkill = () => {

    const skill = [
        "HTML5", "CSS3", 'Tailwind', 'DaisyUI', 'Material UI','Shadcn UI', 'Framer Motion',
        "JavaScript", "C","Nodejs", "Expressjs", 'C ++', "Dart",
        "Reactjs", "Nextjs", "JWT", "Firebase", 'Java', "Mongodb", 'Superbase', 'SQL',
        'Git', "Github", "Vercel", "Netlify"
    ];

    // ✅ updated: Initialize based on HTML class instead of localStorage
    const [isDark, setIsDark] = useState(() => {
        return document.documentElement.classList.contains("dark");
    });

    // ✅ updated: Use MutationObserver to listen for theme change
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect(); // ✅ cleanup
    }, []);

    // ✅ updated: Use dynamic gradient color based on theme
    const gradientColor = isDark
        ? "rgba(3, 0, 20, 0.6)"    // dark background with opacity
        : "rgba(255, 255, 255, 0.9)"; // light background with opacity

    return (
        <div className="text-black dark:text-gray-200">
            <div>
                <h1 className="w-auto lg:w-[20%] text-xl lg:text-4xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4">
                    My
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide">
                        {" "}Skill
                    </span>
                </h1>
                <p className="w-auto lg:w-[40%] text-center text-sm mx-auto">
                    I still have a lot more to learn but these are some of the skills I have acquired along my journey so far.
                </p>
            </div>

            <div className="pt-10">

                {/* ✅ updated: use dynamic gradientColor */}
                <Marquee
                    pauseOnHover={true}
                    gradient
                    gradientColor={gradientColor}
                    gradientWidth={300}
                    direction="right"
                    speed={100}
                >
                    {
                        skill.map((item, idx) => (
                            <p key={idx} className="border-2 font-bold mr-5 border-blue-700 p-4 rounded-full">
                                {item}
                            </p>
                        ))
                    }
                </Marquee>

                <div className="pt-7">

                    {/* ✅ updated: use same dynamic gradientColor for second Marquee */}
                    <Marquee
                        pauseOnHover={true}
                        gradient
                        gradientColor={gradientColor}
                        gradientWidth={300}
                        direction="left"
                        speed={130}
                    >
                        {
                            skill.map((item, idx) => (
                                <p key={idx} className="border-2 font-bold mr-5 border-blue-700 p-4 rounded-full">
                                    {item}
                                </p>
                            ))
                        }
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default MySkill;
