import { useEffect } from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ManageUsersRow = ({ RowData, refetch, index }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { email, name, _id, role } = RowData;
    const handleMakeAdmin = RowData => {
        fetch(`https://server-mstlelanakhatun.vercel.app/users/admin/${RowData._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${RowData.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = RowData => {
        fetch(`https://server-mstlelanakhatun.vercel.app/users/Instructor/${RowData._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${RowData.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = _id => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-mstlelanakhatun.vercel.app/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }

    return (
        <tr className="hover" data-aos="fade-left">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {role === 'admin' ? 'Admin' :
                    <button onClick={() => handleMakeAdmin(RowData)} className="button button-primary flex gap-2 items-center">Admin<FaUserShield /></button>
                }
            </td>
            <td>
                {role === 'Instructor' ? 'Instructor' :
                    <button onClick={() => handleMakeInstructor(RowData)} className="button button-primary flex gap-2 items-center">Instructor<FaUserShield /></button>
                }
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="button button-primary"><FaTrashAlt /></button> 
            </td>
        </tr>
    );
};

export default ManageUsersRow;