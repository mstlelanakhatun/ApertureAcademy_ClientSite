import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import MyClassCard from "./MyClassCard";
import { useContext } from "react";
import { AuthContext } from "../../../Shared/AuthenticationPart/AuthProvider";
import TitleCover from "../../Home/TitleCover";


const MyClasses = () => {

    const { user } = useContext(AuthContext);

    console.log(user)

    const [axiosSecure] = useAxiosSecure();
    const { data: classData = [] } = useQuery([`/classes/${user?.email}`], async () => {
        const res = await axiosSecure.get(`/classes/${user?.email}`)
        return res.data;
    })


    return (
        <div>
            <TitleCover heading='My classes'></TitleCover>
            {classData.length === 0 && <h1 className="text-center text-gray-500 text-5xl font-semibold my-24">Please add your class</h1>}
            <div className="grid md:grid-cols-2 gap-10 md:gap-x-10">
                {
                    classData?.map(data => <MyClassCard
                        key={data._id}
                        data={data}
                    ></MyClassCard>)
                }
            </div>
        </div>
    );
};

export default MyClasses;