import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import inventory from "../../../public/inventory.png";
import restaurant from "../../../public/restaurant.png";
import { LuGithub } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import portfolio from "../../../public/portfolio.png";
import { FiGitlab } from "react-icons/fi";
import face from "../../../public/face.png";
import hospital from "../../../public/hospital.jpg";
import weather from "../../../public/weather.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Portfolio = () => {


  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div id="portfolio-section" className=" min-h-screen px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-lg sm:text-sm md:text-xl lg:text-2xl font-bold"
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}>
          Somethings I&apos;ve built
        </motion.div>
        <div className="lg:text-3xl md:text-xl sm:text-md font-bold text-center mb-12 text-gray-800 mt-8">
          Mern Stack
        </div>

        {/* inventory part  */}
        <div className="space-y-6">
          <motion.div className="text-cyan-500 text-sm mb-2 mt-16  "
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5 }}>
            
            01. Featured Project
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <motion.h3 className="text-xl font-bold "
              ref={ref}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}>
                Inventory or Stock Management System
              </motion.h3>

              <motion.div className="bg-gray-900 p-4 rounded-lg shadow-lg"
              ref={ref}
              initial={{ opacity: 0, x: -80 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}>
                <p className="text-white"
                
                >
                  Designed an inventory management system with a responsive
                  interface, seamless operations, and scalable, reliable
                  deployment for optimal performance. <br /> Also include light
                  and dark theme
                </p>
              </motion.div>

              <motion.div className="flex flex-wrap gap-3 text-sm text-gray-400"
              ref={ref}
              initial={{ opacity: 0, x: -120 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Tailwind Css</span>
                <span>React-JS</span>
                <span>Next-Js</span>
                <span>Node Js</span>
                <span>Postgresql</span>
                <span>Prisma</span>
                <span>AWS</span>
                <span>Amplify</span>
              </motion.div>
              <div className="flex items-start justify-start gap-4"
              >
                <motion.a
                ref={ref}
                initial={{ opacity: 0, x: -80 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                  href="https://github.com/Shaheryar-Ashraf-007/inventory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuGithub className="ml-4 cursor-pointer" size={24} />
                </motion.a>
                <motion.a 
                ref={ref}
                initial={{ opacity: 0, x: -80 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                  href="https://main.douocuf67bkzy.amplifyapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaArrowUpRightFromSquare
                    className="ml-4 cursor-pointer"
                    size={20}
                  />
                </motion.a>
              </div>
            </div>

            {/* Right content */}
            <motion.div className="relative group"
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}>
              <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"
              ></div>
            
              
              <Image
                className="rounded-lg w-full h-auto"
                
                src={inventory}
                alt="Inventory Management System"
              />
              </motion.div>
            </div>
          </div>
        

        {/* restaurant part  */}

        {/* Left content */}
        <div className="grid mt-16 lg:mt-28 grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* right part - now will show first on mobile */}
          <div className="space-y-6 order-1 lg:order-2">
            <motion.div className="text-purple-500 text-sm "
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}>Featured Project
            </motion.div>

            <motion.h3 className="text-xl font-bold "
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            >Restaurant Portal</motion.h3>

            <motion.div className="bg-gray-900 p-4 rounded-lg shadow-lg"
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            >
              <p className="text-white">
                Designed an inventory management system with a responsive
                interface, seamless operations, and scalable, reliable
                deployment for optimal performance. <br /> Also include light
                and dark theme
              </p>
            </motion.div>

            <motion.div className="flex mr-0 flex-wrap gap-3 text-sm text-gray-400"
            ref={ref}
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind Css</span>
              <span>Preline</span>
              <span>Nuxt-js</span>
              <span>Node Js</span>
              <span>Mysql</span>
              <span>Vue-Js</span>
            </motion.div>

            <div className="flex items-start justify-start gap-4">
              <motion.a
                href="https://gitlab.com/bilal.ur.rehman81/restaurant-port"
                target="_blank"
                rel="noopener noreferrer"
                ref={ref}
              initial={{ opacity: 0, x: 80 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              >
                <FiGitlab className="ml-4 cursor-pointer" size={24} />
              </motion.a>
            </div>
          </div>

          {/* Image part - now will show second on mobile */}
          <motion.div className="relative group order-2 lg:order-1"
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}>
            <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
            <Image
              className="rounded-lg w-full h-auto"
              src={restaurant}
              alt="Restaurant"
            />
          </motion.div>
        </div>

        {/* portfolio part  */}

        <div className="space-y-6 mt-16 lg:mt-28">
          <motion.div className="text-pink-500 text-sm mb-2 "
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>Featured Project</motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <motion.h3 className="text-xl font-bold "
              ref={ref}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}>Animated Portfolio</motion.h3>

              <motion.div className="bg-gray-900 p-4 rounded-lg shadow-lg"
              ref={ref}
              initial={{ opacity: 0, x: -80 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}>
                <p className="text-white">
                  Designed an inventory management system with a responsive
                  interface, seamless operations, and scalable, reliable
                  deployment for optimal performance. <br /> Also include light
                  and dark theme
                </p>
              </motion.div>

              <motion.div className="flex flex-wrap gap-3 text-sm text-gray-400"
              ref={ref}
              initial={{ opacity: 0, x: -120 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Tailwind Css</span>
                <span>React-JS</span>
                <span>Next-Js</span>
                <span>Node Js</span>
                <span>Amplify</span>
              </motion.div>
              <div className="flex items-start justify-start gap-4">
                <motion.a
                  href="https://github.com/Shaheryar-Ashraf-007/Animated-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={ref}
              initial={{ opacity: 0, x: -120 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
                >
                  <LuGithub className="ml-4 cursor-pointer" size={24} />
                </motion.a>
                <motion.a
                  href="https://main.d2wbnwiysa6kdn.amplifyapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={ref}
              initial={{ opacity: 0, x: -120 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
                >
                  <FaArrowUpRightFromSquare
                    className="ml-4 cursor-pointer"
                    size={20}
                  />
                </motion.a>
              </div>
            </div>

            {/* Right content */}
            <motion.div className="relative group"
             ref={ref}
             initial={{ opacity: 0, x: 40 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.5}}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
              <Image
                className="rounded-lg w-full h-auto"
                src={portfolio}
                alt="Inventory Management System"
              />
            </motion.div>
          </div>
        </div>

        <div className="lg:text-3xl md:text-xl sm:text-md font-bold text-center mb-12 text-gray-800 mt-12 sm:mt-12">
          Python or ML projects
        </div>

        {/* Left content */}
        <div className="grid mt-16 lg:mt-28 grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* right part - now will show first on mobile */}
          <div className="space-y-6 order-1 lg:order-2">
            <motion.div className="text-purple-500 text-sm "
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}>Featured Project</motion.div>

            <motion.h3 className="text-xl font-bold "
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}>
              Face Recognition Attendance System
            </motion.h3>

            <motion.div className="bg-gray-900 p-4 rounded-lg shadow-lg"
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5}}>
              <p className="text-white">
                Designed an inventory management system with a responsive
                interface, seamless operations, and scalable, reliable
                deployment for optimal performance. <br /> Also include light
                and dark theme
              </p>
            </motion.div>

            <motion.div className="flex mr-0 flex-wrap gap-3 text-sm text-gray-400"
            ref={ref}
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5}}>
              <span>Python</span>
              <span>Tkinter</span>
              <span>CV2</span>
              <span>Pillow</span>
              <span>Mysql</span>
              <span>ML Concepts and Libraries</span>
            </motion.div>

            <div className="flex items-start justify-start gap-4">
              <motion.a
                href="https://github.com/Shaheryar-Ashraf-007/Python-AI-Course-/tree/main/student%20management%20system"
                target="_blank"
                rel="noopener noreferrer"
                ref={ref}
              initial={{ opacity: 0, x: 80 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              >
                <LuGithub className="ml-4 cursor-pointer" size={24} />
              </motion.a>
            </div>
          </div>

          {/* Image part - now will show second on mobile */}
          <motion.div className="relative group order-2 lg:order-1"
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}>
            <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
            <Image
              className="rounded-lg w-full h-auto"
              src={face}
              alt="Restaurant"
            />
          </motion.div>
        </div>

        <div className="space-y-6 mt-16 lg:mt-28">
          <div className="text-pink-500 text-sm mb-2 ">Featured Project</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold ">Hospital Management System</h3>

              <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
                <p className="text-white">
                  Designed an inventory management system with a responsive
                  interface, seamless operations, and scalable, reliable
                  deployment for optimal performance. <br /> Also include light
                  and dark theme
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span>Python</span>
                <span>Tkinter</span>
                <span>Mysql</span>
                <span>Pillow</span>
              </div>
              <div className="flex items-start justify-start gap-4">
                <a
                  href="https://github.com/Shaheryar-Ashraf-007/Python-AI-Course-/tree/main/hospital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuGithub className="ml-4 cursor-pointer" size={24} />
                </a>
              </div>
            </div>

            {/* Right content */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
              <Image
                className="rounded-lg w-full h-auto"
                src={hospital}
                alt="Inventory Management System"
              />
            </div>
          </div>
        </div>

        {/* Weather App  */}

        {/* Left content */}
        <div className="grid mt-16 lg:mt-28 grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* right part - now will show first on mobile */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="text-purple-500 text-sm ">Featured Project</div>

            <h3 className="text-xl font-bold ">Weather App</h3>

            <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
              <p className="text-white">
                Designed an inventory management system with a responsive
                interface, seamless operations, and scalable, reliable
                deployment for optimal performance. <br /> Also include light
                and dark theme
              </p>
            </div>

            <div className="flex mr-0 flex-wrap gap-3 text-sm text-gray-400">
              <span>Python</span>
              <span>Tkinter</span>
              <span>Geo locator Api</span>
              <span>Api of AccuWeather</span>
            </div>

            <div className="flex items-start justify-start gap-4">
              <a
                href="https://github.com/Shaheryar-Ashraf-007/Weather_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuGithub className="ml-4 cursor-pointer" size={24} />
              </a>
            </div>
          </div>

          {/* Image part - now will show second on mobile */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
            <Image
              className="rounded-lg w-full h-auto"
              src={weather}
              alt="Weather"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
