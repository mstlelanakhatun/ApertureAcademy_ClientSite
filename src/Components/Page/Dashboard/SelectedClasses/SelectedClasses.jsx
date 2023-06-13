import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import useSelectedClass from '../../../Hooks/useSelectedClass';
import SelectedRow from './SelectedRow';
import TitleCover from '../../Home/TitleCover';

const SelectedClasses = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [selectedClass, refetch] = useSelectedClass()
    return (
        <div>
            <TitleCover heading='Selected Classes'></TitleCover>
            <div className={`overflow-x-auto ${selectedClass?.length < 6 ? 'h-screen' : ''}`}>
                <table className="table w-full">
                    <thead data-aos="fade-left">
                        <tr >
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Make Payment</th>
                            <th>Action</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClass?.map((RowData, index) => <SelectedRow
                                key={RowData._id}
                                index={index}
                                RowData={RowData}
                                refetch={refetch}
                            ></SelectedRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;