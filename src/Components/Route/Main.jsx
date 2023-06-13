import { createBrowserRouter, } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Page/Home/Home";
import Login from "../Shared/AuthenticationPart/Login";
import SignUp from "../Shared/AuthenticationPart/SignUp";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ManageClasses from "../Page/Dashboard/ManageClasses/ManageClasses";
import AddClass from "../Page/Dashboard/AddClass";
import SelectedClasses from "../Page/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Page/Dashboard/EnrolledClasses/EnrolledClasses";
import ManageUsers from "../Page/Dashboard/ManageUsers/ManageUsers";
import MyClasses from "../Page/Dashboard/MyClasses/MyClasses";
import ApprovedClasses from "../Page/Classes/ManageClasses/ApprovedClasses";
import Instructors from "../Page/Instructors/Instructors";
import UpdateClass from "../Page/Dashboard/MyClasses/updateClass/UpdateClass";
import Error from "../Error/Error";
import Payment from "../Page/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <ApprovedClasses></ApprovedClasses>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        errorElement: <Error></Error>,
        children: [
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'selectedClasses',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'selectedClasses/payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'myClasses/update/:id',
                element: <UpdateClass></UpdateClass>
            },
        ]
    }
]);