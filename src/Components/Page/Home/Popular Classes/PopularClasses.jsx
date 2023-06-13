import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import TitleCover from "../TitleCover";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classData = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    const approveClass = classData.filter(data => data.role === 'approved')
    return (
        <div className={`${approveClass.length > 0 ? '' : 'h-screen'}`}>
            <TitleCover heading="Popular Classes"></TitleCover>
            {approveClass.length === 0 && <h1 className="text-center text-gray-500 text-5xl font-semibold my-24">Courses Coming Soon..........</h1>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-10 my-10">
                {
                    approveClass?.slice(0, 6).map(data => <PopularClassesCard
                        key={data._id}
                        data={data}
                        refetch={refetch}
                    ></PopularClassesCard>)
                }
            </div>
        </div>
 
    );
};

export default PopularClasses;