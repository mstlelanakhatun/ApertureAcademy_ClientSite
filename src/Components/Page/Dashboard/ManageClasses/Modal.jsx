import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Modal = ({ refetch, data }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [URL, setURL] = useState();
    const handleFeedbackId = _id => {
        const url = `https://server-mstlelanakhatun.vercel.app/classes/feedback/${_id}`
        setURL(url)
    }

    const handleFeedback = _id => {
        console.log(_id)
        fetch(URL, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(_id)
        })
            .then(res => res.json())
            .then(data => {
                reset();
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Class Feedback Send Successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)} className="button button-primary">Feedback</button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">{data.className} Feedback</h3>
                                </div>
                                <form onSubmit={handleSubmit(handleFeedback)} className="relative p-6 flex-auto">
                                    <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
                                        <div className="w-64 md:w-96">
                                            <div className="relative w-full min-w-[200px]">
                                                <textarea {...register("feedback", { required: true })}
                                                    className="peer h-full min-h-[150px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                                    placeholder=" "
                                                ></textarea>
                                                <label className="before:content[' '] after:content[' ' input-level">
                                                    Feedback Message
                                                </label>
                                                {errors.feedback && <span className="text-red-600">Feedback message is required</span>}
                                            </div>
                                        </div>
                                        <button type="submit" onClick={() => handleFeedbackId(data._id)} className="button button-primary">Send Feedback</button>
                                    </div>
                                </form>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button onClick={() => setShowModal(false)}
                                        className="middle none center mr-1 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase transition-all hover:bg-blue-600/10 active:bg-blue-600/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;