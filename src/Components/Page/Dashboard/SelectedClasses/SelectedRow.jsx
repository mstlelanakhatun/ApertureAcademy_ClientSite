import { useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SelectedRow = ({ RowData, refetch, index }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { className, ClassImage, price, _id } = RowData;
    const handleDelete = _id => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-mstlelanakhatun.vercel.app/selectedClass/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                `Your selected class has been deleted.`,
                                'success'
                            )
                            refetch();
                        }
                    })
            }
        })
    }

    return (
        <tr className="hover" data-aos="fade-left">
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            <img src={ClassImage} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{className}</td>
            <td>${price}</td>
            <td>
                <Link to={`/dashboard/selectedClasses/payment/${_id}`}><button className="btn text-white button-primary">Payment</button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="button button-primary"><FaTrashAlt /></button>
            </td>
        </tr>
    );
};

export default SelectedRow;