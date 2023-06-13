
import { NavLink } from 'react-router-dom';


const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive
                ? "font-bold btn btn-ghost underline text-blue-600" : "btn btn-ghost"
            }
        > {children}</NavLink>
    );
};

export default ActiveLink;