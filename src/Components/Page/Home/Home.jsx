import Banner from "./Banner";
import PopularClasses from "./Popular Classes/PopularClasses";
import PopularInstructors from "./Popular Instructors/PopularInstructors";
import SeniorInstructor from "./SeniorInstructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <SeniorInstructor></SeniorInstructor>
        </div>
    );
};

export default Home;