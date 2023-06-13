import { useContext } from "react";
import { AuthContext } from "../Shared/AuthenticationPart/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useEnrollClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClass = [], refetch } = useQuery([`/payments?email=${user?.email}`], async () => {
        const res = await axiosSecure.get(`/payments?email=${user?.email}`)
        return res.data;
    })
    return [selectedClass, refetch]
};

export default useEnrollClass;