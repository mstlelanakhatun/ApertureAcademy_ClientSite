import { Outlet, ScrollRestoration } from "react-router-dom";
// import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Layout;