import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { FaFolderOpen, FaFolderPlus, FaUsers } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import useAdmin from "../../Hooks/useAdmin";
import useInstructors from "../../Hooks/useInstructors";
import useStudent from "../../Hooks/useStudent";
import Nav from "../../Shared/Navbar/Navbar";


const Dashboard = () => {
    const [admin] = useAdmin();
    const [Instructors] = useInstructors();
    const [student] = useStudent();
    return (
        <>
            <Nav></Nav>
            <div className="flex gap-4 md:gap-10">
                <div className=" h-[400px] ">
                    <div className="sidebar h-[400px] w-[3.35rem] overflow-hidden border-r md:w-56 hover:shadow-lg">
                        <ul className="mt-6 space-y-2 tracking-wide sideBar">
                            {admin && <> <li className="min-w-max">
                                <NavLink to={'manageClasses'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <FaFolderOpen className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                    <span className="group-hover:text-gray-700">Manage Classes</span>
                                </NavLink>
                            </li>
                                <li className="min-w-max">
                                    <NavLink to={'manageUsers'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                        <FaUsers className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                        <span className="group-hover:text-gray-700">Manage Users</span>
                                    </NavLink>
                                </li></>}
                            {Instructors && <><li className="min-w-max">
                                <NavLink to={'addClass'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <FaFolderPlus className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                    <span className="group-hover:text-gray-700">Add a Class</span>
                                </NavLink>
                            </li>
                                <li className="min-w-max">
                                    <NavLink to={'myClasses'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                        <FaFolderOpen className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                        <span className="group-hover:text-gray-700">My Classes</span>
                                    </NavLink>
                                </li></>}
                            {student && <>  <li className="min-w-max">
                                <NavLink to={'selectedClasses'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <FaFolderOpen className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                    <span className="group-hover:text-gray-700">Selected Classes</span>
                                </NavLink>
                            </li>
                                <li className="min-w-max">
                                    <NavLink to={'enrolledClasses'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                        <RiSecurePaymentFill className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                        <span className="group-hover:text-gray-700">Enrolled Classes</span>
                                    </NavLink>
                                </li></>}
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </>

    );
};

export default Dashboard;