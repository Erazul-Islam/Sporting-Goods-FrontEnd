import { Button, Input, Select } from "antd";

const CheckOut = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div>
            <div>
                <h1>Please Provide your information</h1>
                <p>
                    <h1>Your Name</h1>
                    <Input className="w-72" placeholder="Name"></Input>
                </p>
                <p>
                    <h1>Your email</h1>
                    <Input className="w-72" type="email" placeholder="email"></Input>
                </p>
                <p>
                    <h1>Your phone Number</h1>
                    <Input className="w-72" placeholder="Number"></Input>
                </p>
                <p>
                    <h1>Your Address</h1>
                    <Input className="w-72 h-36" placeholder="address"></Input>
                </p>
                <p>
                    <h1>Please Select a payment Option</h1>
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
                    <Button>Place Order</Button>
            </div>
        </div>
    );
};

export default CheckOut;