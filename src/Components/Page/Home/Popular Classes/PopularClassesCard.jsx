import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Shared/AuthenticationPart/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useStudent from "../../../Hooks/useStudent";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructors from "../../../Hooks/useInstructors";
import useSelectedClass from "../../../Hooks/useSelectedClass";


const PopularClassesCard = ({ data }) => {
    const { ClassImage, availableSeats, className, instructorName, price , Enrolled} = data;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [, refetch] = useSelectedClass();
    const [student] = useStudent();
    const [admin] = useAdmin();
    const [Instructors] = useInstructors();
    console.log(student)
    const handleEnroll = classData => {
        const { _id, className, ClassImage, price } = classData;
        if (user && user.email) {
            const selectedClass = { classId: _id, className, ClassImage, price, email: user.email }
            console.log(selectedClass)
            fetch('https://server-mstlelanakhatun.vercel.app/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to enroll in class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={ClassImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p><span className="font-semibold">Instructor Name:</span> {instructorName}</p>
                <p><span className="font-semibold">Total Enrolled Students:</span> {Enrolled}</p>
                <p><span className="font-semibold">Available Seats:</span> {availableSeats}</p> 
                <p><span className="font-semibold">Price:</span> ${price}</p>
                <div className="card-actions">
                    <button disabled={admin || Instructors} onClick={() => handleEnroll(data)} className="button button-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassesCard;