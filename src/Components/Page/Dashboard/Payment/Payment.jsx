import { loadStripe } from "@stripe/stripe-js";
import TitleCover from "../../Home/TitleCover";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payment = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const { data: classDataForPay = [], refetch } = useQuery([`/selectedClasses/payment/${id}`], async () => {
        const res = await axiosSecure.get(`/selectedClasses/payment/${id}`)
        return res.data;
    })
    const { price } = classDataForPay;
    const payAblePrice = parseFloat(price)
    return (
        <div>
            <TitleCover heading="Please Process To Payment"></TitleCover>
            <Elements stripe={stripePromise}>
                <CheckoutForm classDataForPay={classDataForPay} refetch={refetch} price={payAblePrice}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;