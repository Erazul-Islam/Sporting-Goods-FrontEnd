import { Input } from "antd";

const Contact = () => {
    return (
        <div className="flex">
            <div>

            </div>
            <div>
                <div className="flex">
                    <h1>
                        <h1 className="text-white">First Name</h1>
                        <Input  className="" placeholder="First Name" />
                    </h1>
                    <h1>
                        <h1 className="text-white">Last Name</h1>
                        <Input placeholder="Last Name" />
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;