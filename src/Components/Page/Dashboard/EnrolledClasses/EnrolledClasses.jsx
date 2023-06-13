import useEnrollClass from "../../../Hooks/useEnrollClass";
import TitleCover from "../../Home/TitleCover";
import EnrollCard from "./EnrollCard";

const EnrolledClasses = () => {
    const [EnrolledClass] = useEnrollClass()
    return (
        <div className={`${EnrolledClass.length > 0 ? '' : 'h-screen'}`}>
            <TitleCover heading="Enrolled Classes"></TitleCover>
            {EnrolledClass.length === 0 && <h1 className="text-center text-gray-500 text-5xl font-semibold my-24">Please Enroll Any Classes</h1>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-10 my-10">
                {
                    EnrolledClass?.map(data => <EnrollCard
                        key={data._id}
                        data={data}
                    ></EnrollCard>)
                }
            </div>
        </div>
    );
};

export default EnrolledClasses;