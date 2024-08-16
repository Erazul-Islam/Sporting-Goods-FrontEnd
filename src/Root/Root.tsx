import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Navbar from "../components/NavBar/NewNav";

const Root = () => {
    return (
        <div className="bg-gradient-to-r from-custom-purple to-custom-blue">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
