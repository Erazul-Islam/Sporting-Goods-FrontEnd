import { ImLocation } from "react-icons/im";
import { FaQuestion } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { MdOutlineMan2 } from "react-icons/md";

const Contact = () => {
    return (
        <div className="lg:mt-16">
            <h1 className="text-white text-center text-3xl font-Sofia">Contact us</h1>
            <h1 className="text-4xl text-center text-white font-bold">Let's start right now!</h1>
            <div className="lg:ml-56 mt-16 lg:flex justify-between lg:mr-56">
                <div className="mt-12">
                    <div>
                        <h1 className="text-4xl text-custom-blue"><ImHeadphones /></h1>
                        <h1 className="text-white font-Sofia text-3xl">+1 001 234 5678</h1>
                        <h2 className="text-white font-Sofia text-3xl">Call us: Mon – Fri 9:00 – 19:00</h2>
                    </div>
                    <div>
                        <h1 className="text-4xl mt-12 text-custom-blue"><ImLocation /></h1>
                        <h1 className="text-white font-Sofia text-3xl">990 Madison Ave, Midtown Manhattan,</h1>
                        <h2 className="text-white font-Sofia text-3xl">2th Floor, NY 10022</h2>
                    </div>
                    <div>
                        <h1 className="text-4xl mt-12 text-custom-blue"> <FaQuestion></FaQuestion></h1>
                        <h1 className="text-white font-Sofia text-3xl">info@dream-theme.com</h1>
                        <h2 className="text-white font-Sofia text-3xl">Drop us a line anytime!</h2>
                    </div>
                    <div>
                        <h1 className="text-4xl mt-12 text-custom-blue"><MdOutlineMan2></MdOutlineMan2></h1>
                        <h1 className="text-white font-Sofia text-3xl">hr@dream-theme.com</h1>
                        <h2 className="text-white font-Sofia text-3xl">Career at Seven Creative</h2>
                    </div>
                </div>
                <div className="mt-8 bg-custom-purple w-2/4 pl-16 pt-7 pb-7 rounded-tl-[50px] rounded-br-[50px]">
                    <h1 className="text-3xl font-Merriweather text-white">Make an online enquiry</h1>
                    <h2 className="text-xl mt-8 font-Merriweather text-white">Got questions? Ideas? Fill out the form below to get our proposal.</h2>
                    <div className="flex mt-8 gap-8">
                        <div>
                            <h4 className="font-bold text-white">NAME *</h4>
                            <input className="lg:w-72 mt-3 h-12 " placeholder="Name" type="text" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">EMAIL *</h4>
                            <input className="lg:w-72 mt-3 h-12 " placeholder="Email" type="text" />
                        </div>
                    </div>
                    <div className="flex mt-3 gap-8">
                        <div>
                            <h4 className="font-bold text-white">YOUR BUDGET</h4>
                            <input className="lg:w-72 mt-3 h-12 " placeholder="Budget" type="text" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">TIMEFRAM *</h4>
                            <input className="lg:w-72 mt-3 h-12 " placeholder="Timeframe" type="text" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mt-3 text-white">TELL US A BIT ABOUT YOUR PROJECT *</h4>
                        <input className="lg:w-2/3 mt-3 h-48 " placeholder="Timeframe" type="text" />
                    </div>
                    <div className="text-center">
                        <button className="w-2/4 rounded-tr-[50px] rounded-bl-[50px] text-white h-10 mt-4 bg-custom-button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

