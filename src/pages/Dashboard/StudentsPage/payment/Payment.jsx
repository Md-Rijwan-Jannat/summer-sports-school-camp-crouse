import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../components/Headers/SectionTitle";
import { Helmet } from "react-helmet-async";
import useAddClass from "../../../../components/hooks/useAddClass";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutHook from "./CheckoutHook/CheckoutHook";

const stripePromise = loadStripe('pk_test_51NEqinCzuPCgzXt0fCmTm4Ov7YUqDHa9s2x4bPNvS2LNyrbomaPdVI4VFcFrMCkRB1jta5YLjTCRY2moxB6eg1zq00q10Dkwl8')

const Payment = () => {
    const [addedClass] = useAddClass();
    const amount = addedClass.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(amount).toFixed(2);
    return (
        <div>
            <Helmet ><title>Summer Sports Camp || Payment Fast</title></Helmet>
            <SectionTitle title={"Payment Fast"}></SectionTitle>

            <Elements stripe={stripePromise}>
                <div className="pb-20">
                <CheckoutHook price={price} addedClass={addedClass}></CheckoutHook>
                </div>
            </Elements>
        </div>
    );
};

export default Payment;