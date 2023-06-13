import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import TitleCover from "../TitleCover";
import PopularInstructorsCard from "./PopularInstructorsCard";


const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: userData = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const Instructors = userData.filter(data => data.role === 'Instructor')
    return (
        <div>
            <TitleCover heading="Popular Instructors"></TitleCover>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-10 my-10">
                {
                    Instructors?.slice(0, 6).map(data => <PopularInstructorsCard
                        key={data._id}
                        data={data}
                    ></PopularInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;