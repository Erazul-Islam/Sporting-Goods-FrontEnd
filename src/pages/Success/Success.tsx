import { Link } from "react-router-dom";

const Success = () => {
    return (
        <div className="h-screen">
            <div className="mt-12 bg-custom-purple lg:ml-[700px] w-1/3  pt-7 pb-7 rounded-tl-[50px] rounded-br-[50px]">
                <div>
                    <h1 className="text-white text-center text-3xl font-Sofia">Thank You for Ordering</h1>
                    <img className="w-28  block ml-auto mr-auto mt-12 h-28" src="https://i.ibb.co/QdBtDbj/download.png" alt="" />
                    <div className="text-center gap-4">
                        <Link to='/'><button className="rounded-tr-[25px] w-24 rounded-bl-[25px] text-white h-10 mt-4 bg-custom-button">
                            Go Home
                        </button></Link>
                        <Link to='/all-products'><button className="rounded-tr-[25px] ml-8  w-36 rounded-bl-[25px] text-white h-10 mt-4 bg-custom-button">
                            Continue Shopping
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;