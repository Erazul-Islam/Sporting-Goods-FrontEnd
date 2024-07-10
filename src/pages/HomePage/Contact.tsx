import { Button, Input } from "antd";

const Contact = () => {
    return (
        <div className="lg:mt-16">
            <h1 className="text-white text-center text-3xl font-mono">Contact us</h1>
            <div className="flex justify-between lg:ml-96 lg:mr-96">
                <div>
                    <h1 className="text-white text-2xl font-bold ">Are you interested to contact us</h1>
                </div>
                <div>
                    <div className="flex">
                        <h1>
                            <h1 className="text-white">First Name</h1>
                            <Input className="" placeholder="First Name" />
                        </h1>
                        <h1>
                            <h1 className="text-white">Last Name</h1>
                            <Input placeholder="Last Name" />
                        </h1>
                    </div>
                    <h1>
                        <h1 className="text-white">Email</h1>
                        <Input className="" placeholder="something@example.com" />
                    </h1>
                    <Button className="w-20 h-9 bg-indigo-700 border-none hover:bg-purple-800" type="default">Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;

