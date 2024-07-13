

import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import Logo from '../Logo/Logo';

const Footer: React.FC = () => {
    const socialMediaProps = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 1000 },
        delay: 500,
    });

    const linksProps = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 1000 },
        delay: 1000,
    });

    return (
        <footer className="bg-custom-purple text-white py-8 mt-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <Logo />
                    <h1 className='text-white text-xl font-Sofia mt-16'>Questions? Reach us <br />
                        Monday – Friday from 9 am to 6 pm</h1>
                    <h2 className='text-3xl mt-8 text-white font-Sofia'>+1 001 234 5678</h2>
                </div>
                <animated.div style={linksProps} className=" lg:ml-56 items-center text-xl">
                    <h1 className='text-white font-Sofia text-2xl'>Company</h1>
                    <a href="#" className="text-white mt-6 hover:text-gray-400 mx-2">Home</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">About</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">Contact</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">All Product</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">Cart</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">Manage</a> <br />
                </animated.div>
                <animated.div style={linksProps} className=" items-center text-xl">
                    <h1 className='text-white font-Sofia text-2xl'>Product</h1>
                    <a href="#" className="text-white mt-6 hover:text-gray-400 mx-2">Jersey</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">Trouser</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">Shoes</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">Equipment</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">Spary</a> <br />
                    <a href="#" className="text-white mt-3 hover:text-gray-400 mx-2">Ball</a> <br />
                </animated.div>
                <animated.div style={socialMediaProps} className="">
                    <h1 className='text-2xl text-white font-Sofia'>Connect</h1>
                    <div className='flex mt-8 space-x-4 mb-4 md:mb-0'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="w-10 h-10 text-white hover:text-gray-400 transition duration-300" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="w-10 h-10 text-white hover:text-gray-400 transition duration-300" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-10 h-10 text-white hover:text-gray-400 transition duration-300" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="w-10 h-10 text-white hover:text-gray-400 transition duration-300" />
                        </a>
                    </div>
                </animated.div>
               
            </div>
        </footer>
    );
};

export default Footer;
