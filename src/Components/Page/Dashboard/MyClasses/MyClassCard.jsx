import { Link } from "react-router-dom";


const MyClassCard = ({ data }) => {
    const { ClassImage, availableSeats, className, price, role, feedback, _id, Enrolled } = data;

    console.log(role)
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={ClassImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p><span className="font-semibold">Total Enrolled Students:</span> {Enrolled}</p>
                <p><span className="font-semibold">Available Seats:</span> {availableSeats}</p>
                <p><span className="font-semibold">Price:</span> ${price}</p>
                {role === 'denied' && feedback && <p><span className="font-semibold">Feedback:</span> {feedback}</p>}
                <div className="card-actions justify-between">
                    <p className="text-[16px]"><span className="font-semibold">Status:</span> <span className={`${role === 'denied' ? 'text-red-500' : '' || role === 'approved' ? 'text-green-500' : '' || role === 'pending' ? 'text-yellow-800' : ''}`}>{role}</span></p>
                    <Link to={`update/${_id}`} className="button button-primary">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default MyClassCard;