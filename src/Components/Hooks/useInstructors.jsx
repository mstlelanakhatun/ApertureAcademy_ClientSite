import { useContext } from "react";
import { AuthContext } from "../Shared/AuthenticationPart/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: Instructor } = useQuery({
        queryKey: ['Instructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/Instructor/${user?.email}`);
            return res.data.Instructor;
        }
    })
    return [Instructor]
};

export default useInstructors;