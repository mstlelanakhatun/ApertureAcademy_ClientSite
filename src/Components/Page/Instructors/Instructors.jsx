import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TitleCover from "../Home/TitleCover";
import InstructorsCard from "./InstructorsCard";


const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: userData = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const Instructors = userData.filter(data => data.role === 'Instructor')
    return (
        <div>
            <TitleCover heading="Instructors"></TitleCover>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-10 my-10">
                {
                    Instructors?.map(data => <InstructorsCard
                        key={data._id}
                        data={data}
                    ></InstructorsCard>)
                }
            </div>

        </div>
    );
};

export default Instructors;