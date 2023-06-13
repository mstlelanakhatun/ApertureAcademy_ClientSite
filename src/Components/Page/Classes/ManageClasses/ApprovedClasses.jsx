import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ApproveCard from "./ApproveCard";
import TitleCover from "../../Home/TitleCover";


const ApprovedClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classData = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    const approveClass = classData.filter(data => data.role === 'approved')
    return (
        <div className={`${approveClass.length > 0 ? '' : 'h-screen'}`}>
            <TitleCover heading="All Courses"></TitleCover>
            {approveClass.length === 0 && <h1 className="text-center text-gray-500 text-5xl font-semibold my-24">Courses Coming Soon..........</h1>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-10 my-10">
                {
                    approveClass?.map(data => <ApproveCard
                        key={data._id}
                        data={data}
                        refetch={refetch}
                    ></ApproveCard>)
                }
            </div>
        </div>

    );
};

export default ApprovedClasses;