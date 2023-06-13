import ClassCard from "./ClassCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TitleCover from "../../Home/TitleCover";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classData = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    return (
        <div>
            <TitleCover heading='Manage Classes'></TitleCover>
            <div className="grid md:grid-cols-2 gap-10 md:gap-x-10 mb-10">
                {
                    classData?.map(data => <ClassCard
                        key={data._id}
                        data={data}
                        refetch={refetch}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;