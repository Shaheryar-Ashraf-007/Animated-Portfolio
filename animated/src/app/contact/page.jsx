"use client"
import React from 'react'
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {

  const handleEmailClick = () => {
    const email = 'muhammadshaheryar45@gmail.com'; 
    const subject = 'Hello!';
    const body = 'Hi there! I came across your portfolio and wanted to say hello.';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <div id='contact-section' className='flex justify-center items-center min-h-screen px-4 py-8'>
      <div className="w-[80%] md:w-3/4 lg:w-1/2 mx-auto">
        <div className="text-sm md:text-base lg:text-lg font-normal text-center text-cyan-500">
          What&apos;s Next?
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl mt-4 font-bold text-center text-white">
          Get In Touch
        </div>
        <p className="text-sm md:text-base lg:text-xl mt-4 font-light text-center mb-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-relaxed">
          I&apos;m currently in a search of new and better opportunities. My inbox is always open. Whether you wanna hire or just say hi, I&apos;ll try my best to get back to you! </p>
        
        
        
        <div className="flex items-center justify-center">
        <motion.button
              className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-2 rounded-full relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span onClick={handleEmailClick} className="relative z-10">Say Hello</span>
            </motion.button>

      </div>
      </div>
    </div>
  )
}

export default Contact