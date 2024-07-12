

import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
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
                    <span className="ml-3 text-xl font-semibold">Taosif Sporting Store</span>
                </div>
                <animated.div style={socialMediaProps} className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
                    </a>
                </animated.div>
                <animated.div style={linksProps} className="flex flex-col md:flex-row items-center">
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Home</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">About</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Contact</a>
                </animated.div>
                <div className="mt-4 md:mt-0">
                    <p className="text-gray-400 text-sm">&copy; 2024 Taosif Sporting Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
