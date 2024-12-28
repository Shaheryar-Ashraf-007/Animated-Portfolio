import React from 'react'
import Image from 'next/image'
import inventory from '../../../public/inventory.png'


const portfolio = () => {

  return (
    <div className=''>
      <div id='portfolio-section' className="mt-8 ml-8 lg:ml-16 sm:text-sm md:text-xl lg:text-2xl font-bold transition-transform duration-500 hover:scale-105">
      Somethings I've built
      </div>
      <div className=" mt-4 lg:text-3xl md:text-xl sm:text-md font-bold text-center mb-12 text-gray-800">Mern Stack</div>
      <div className="flex items-center justify-between mb-8">
      <div className="w-[30%] mt-12 ml-16">
      <div className="  text-cyan-500">Feature Project</div>
      <div className="mt-4 ml-16 font-bold lg:text-2xl">Inventory Management System</div>
      </div>
      <div className="h-full">
        <Image className='mr-16 rounded-md w-96 h-48' src={inventory}  alt="inventory" />
        </div>
        </div>
        <div className="w-[60%] ml-16 mt bg-cyan-500 mt-[-50px] overflow-clip mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati architecto ut odio consectetur autem qui voluptate rerum eveniet debitis similique.
        </div>
      </div>
  )
}

export default portfolio
