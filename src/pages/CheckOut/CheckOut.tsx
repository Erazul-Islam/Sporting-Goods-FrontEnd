import { Button, Input, Select } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const CheckOut = () => {

    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('COD');

    const handlePlaceOrder = async (paymentMethod: any) => {
        try {
            // Collect order data
            const orderData = {
                name,
                email,
                phone,
                address,
                paymentMethod,
            };

            console.log(orderData)

            // Send order data to the backend
            await axios.post('http://localhost:5000/orders', orderData);

            // Show success message and redirect
            Swal.fire({
                title: "Success!",
                text: "Your order has been placed.",
                icon: "success",
            }).then(() => {
                navigate('/success');
            });
        } catch (err) {
            console.error(err);
            Swal.fire({
                title: "Error!",
                text: "There was an issue placing your order.",
                icon: "error",
            });
        }
    };

    return (
        <div className="h-screen">
            <h1 className="text-white lg:mt-8 lg:mb-8 text-center text-3xl font-Sofia">Checkout</h1>
            <div className="mt-12 bg-custom-purple lg:ml-[700px] md:ml[350px] ml-[175px] w-1/3 lg:pl-48 pt-7 pb-7 rounded-tl-[50px] rounded-br-[50px]">
                <div>
                    <h1 className="text-2xl font-Merriweather text-white">Please Provide your information</h1>
                    <p>
                        <h1 className="font-Merriweather mt-4 text-white">Your Name</h1>
                        <Input onChange={(e) => setName(e.target.value)} id="name" className="lg:w-72" required placeholder="Name"></Input>
                    </p>
                    <p>
                        <h1 className="font-Merriweather mt-4 text-white">Your email</h1>
                        <Input onChange={(e) => setEmail(e.target.value)} id="email" className="lg:w-72" required type="email" placeholder="email"></Input>
                    </p>
                    <p>
                        <h1 className="font-Merriweather mt-4 text-white">Your phone Number</h1>
                        <Input onChange={(e) => setPhone(e.target.value)} id="phone" className="lg:w-72" required placeholder="Number"></Input>
                    </p>
                    <p >
                        <h1 className="font-Merriweather mt-4 text-white">Your Address</h1>
                        <Input id="address" onChange={(e) => setAddress(e.target.value)} className="lg:w-72 h-36" required placeholder="address"></Input>
                    </p>
                    <p>
                        <h1 className="font-Merriweather mt-4 text-white">Please Select a payment Option</h1>
                        <Select
                            
                            style={{ width: 120 }}
                            onChange={(value) => handlePlaceOrder(value as string)}
                            options={[
                                { value: 'COD', label: 'COD' },
                                { value: 'Stripe', label: 'Stripe' },
                            ]}
                        />
                    </p>
                    <Button
                        className="mt-4 rounded-tr-[25px] w-24 rounded-bl-[25px] text-white h-10 bg-custom-button"
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;