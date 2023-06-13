import Swal from "sweetalert2";
import Modal from "./Modal";


const ClassCard = ({ data, refetch }) => {
    const { ClassImage, availableSeats, className, instructorEmail, instructorName, price, role, _id } = data;
    const handleApproved = _id => {
        fetch(`https://server-mstlelanakhatun.vercel.app/classes/approved/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Class Approved Successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDenied = _id => {
        fetch(`https://server-mstlelanakhatun.vercel.app/classes/denied/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Class Denied Successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handlePending = _id => {
        fetch(`https://server-mstlelanakhatun.vercel.app/classes/pending/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Class Pending Successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={ClassImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p><span className="font-semibold">Instructor Name:</span> {instructorName}</p>
                <p><span className="font-semibold">Instructor Email:</span> {instructorEmail}</p>
                <p><span className="font-semibold">Available Seats:</span> {availableSeats}</p> 
                <p><span className="font-semibold">Price:</span> ${price}</p>
                <div className="card-actions">
                    <button disabled={role === 'approved'} onClick={() => handleApproved(_id)} className="btn btn-success">Approved</button>
                    <button disabled={role === 'pending'} onClick={() => handlePending(_id)} className="btn btn-warning">Pending</button>
                    <button disabled={role === 'denied'} onClick={() => handleDenied(_id)} className="btn btn-error">Denied</button>
                    <Modal
                        refetch={refetch}
                        data={data}
                    ></Modal>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;