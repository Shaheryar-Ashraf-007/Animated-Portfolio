import React from "react";
import Image from "next/image";
import inventory from "../../../public/inventory.png";
import restaurant from "../../../public/restaurant.png";
import { LuGithub } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import portfolio from '../../../public/portfolio.png'
import { FiGitlab } from "react-icons/fi";
import face from '../../../public/face.png'


const Portfolio = () => {
  return (
    <div className=" min-h-screen px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-lg sm:text-sm md:text-xl lg:text-2xl font-bold transition-transform duration-500 hover:scale-105">
          Somethings I&apos;ve built
        </div>
        <div className="lg:text-3xl md:text-xl sm:text-md font-bold text-center mb-12 text-gray-800 mt-8">
          Mern Stack
        </div>

        {/* inventory part  */}
        <div className="space-y-6">
          <div className="text-cyan-500 text-sm mb-2 mt-12">
            Featured Project
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold ">
                Inventory or Stock Management System
              </h3>

              <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
                <p className="text-white">
                  Designed an inventory management system with a responsive
                  interface, seamless operations, and scalable, reliable
                  deployment for optimal performance. <br /> Also include light
                  and dark theme
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
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
              </div>
              <div className="flex items-start justify-start gap-4">
                <a
                  href="https://github.com/Shaheryar-Ashraf-007/inventory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuGithub className="ml-4 cursor-pointer" size={24} />
                </a>
                <a
                  href="https://main.douocuf67bkzy.amplifyapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaArrowUpRightFromSquare
                    className="ml-4 cursor-pointer"
                    size={20}
                  />
                </a>
              </div>
            </div>

            {/* Right content */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
              <Image
                className="rounded-lg w-full h-auto"
                src={inventory}
                alt="Inventory Management System"
              />
            </div>
          </div>
        </div>

        {/* restaurant part  */}

        {/* Left content */}
        <div className="grid mt-28 grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* right part - now will show first on mobile */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="text-purple-500 text-sm ">Featured Project</div>

            <h3 className="text-xl font-bold ">Restaurant Portal</h3>

            <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
              <p className="text-white">
                Designed an inventory management system with a responsive
                interface, seamless operations, and scalable, reliable
                deployment for optimal performance. <br /> Also include light
                and dark theme
              </p>
            </div>

            <div className="flex mr-0 flex-wrap gap-3 text-sm text-gray-400">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind Css</span>
              <span>Preline</span>
              <span>Nuxt-js</span>
              <span>Node Js</span>
              <span>Mysql</span>
              <span>Vue-Js</span>
            </div>

            <div className="flex items-start justify-start gap-4">
              <a
                href="https://gitlab.com/bilal.ur.rehman81/restaurant-port"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGitlab className="ml-4 cursor-pointer" size={24} /> 
                </a>
            </div>
          </div>

          {/* Image part - now will show second on mobile */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
            <Image
              className="rounded-lg w-full h-auto"
              src={restaurant}
              alt="Restaurant"
            />
          </div>
        </div>

        {/* portfolio part  */}



        <div className="space-y-6 mt-28">
          <div className="text-pink-500 text-sm mb-2 ">
            Featured Project
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold ">
                Animated Portfolio
              </h3>

              <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
                <p className="text-white">
                  Designed an inventory management system with a responsive
                  interface, seamless operations, and scalable, reliable
                  deployment for optimal performance. <br /> Also include light
                  and dark theme
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Tailwind Css</span>
                <span>React-JS</span>
                <span>Next-Js</span>
                <span>Node Js</span>
                <span>Amplify</span>
              </div>
              <div className="flex items-start justify-start gap-4">
                <a
                  href="https://github.com/Shaheryar-Ashraf-007/Animated-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuGithub className="ml-4 cursor-pointer" size={24} />
                  </a>
                <a
                  href="https://main.d2wbnwiysa6kdn.amplifyapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaArrowUpRightFromSquare
                    className="ml-4 cursor-pointer"
                    size={20}
                  />
                </a>
              </div>
            </div>

            {/* Right content */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
              <Image
                className="rounded-lg w-full h-auto"
                src={portfolio}
                alt="Inventory Management System"
              />
            </div>
          </div>
        </div>

        <div className="lg:text-3xl md:text-xl sm:text-md font-bold text-center mb-12 text-gray-800 mt-8">
          Python or ML projects
        </div>

         {/* Left content */}
         <div className="grid mt-28 grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* right part - now will show first on mobile */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="text-purple-500 text-sm ">Featured Project</div>

            <h3 className="text-xl font-bold ">Face Recognition Attendance System</h3>

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
              <span>CV2</span>
              <span>Pillow</span>
              <span>Mysql</span>
              <span>ML Concepts and Libraries</span>
            </div>

            <div className="flex items-start justify-start gap-4">
              <a
                href="https://github.com/Shaheryar-Ashraf-007/Python-AI-Course-/tree/main/student%20management%20system"
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
              src={face}
              alt="Restaurant"
            />
          </div>
        </div>



      </div>
    </div>
  );
};

export default Portfolio;
