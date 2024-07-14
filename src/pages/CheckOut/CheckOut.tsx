import { Button, Input, Select } from "antd";
import { Link } from "react-router-dom";

const CheckOut = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div>
            <h1 className="text-white lg:mt-8 lg:mb-8 text-center text-3xl font-Sofia">Checkout</h1>
            <div className="mt-12 bg-custom-purple lg:ml-[700px] w-1/3 lg:pl-48 pt-7 pb-7 rounded-tl-[50px] rounded-br-[50px]">
                <div>
                    <h1 className="text-2xl font-Merriweather text-white">Please Provide your information</h1>
                    <p>
                        <h1 className="font-Merriweather mt-4 text-white">Your Name</h1>
                        <Input className="w-72" placeholder="Name"></Input>
                    </p>
                    <p>
                        <h1 className="font-Merriweather mt-4 text-white">Your email</h1>
                        <Input className="w-72" type="email" placeholder="email"></Input>
                    </p>
                    <p>
                        <h1 className="font-Merriweather mt-4 text-white">Your phone Number</h1>
                        <Input className="w-72" placeholder="Number"></Input>
                    </p>
                    <p >
                        <h1 className="font-Merriweather mt-4 text-white">Your Address</h1>
                        <Input className="w-72 h-36" placeholder="address"></Input>
                    </p>
                    <p>
                        <h1 className="font-Merriweather mt-4 text-white">Please Select a payment Option</h1>
                        <Select
                            defaultValue="COD"
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                { value: 'COD', label: 'COD' },
                                { value: 'Stripe', label: 'Stripe' },
                            ]}
                        />
                    </p>
                    <Link to='/success'><Button className="mt-4 rounded-tr-[25px] w-24 rounded-bl-[25px] text-white h-10 bg-custom-button">Place Order</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;