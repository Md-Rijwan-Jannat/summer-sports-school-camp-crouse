import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import useAxiosSecure from "../../../../../components/hooks/useAxiosSecure";
import useAuth from "../../../../../components/hooks/useAuth";
import { toast } from "react-hot-toast";


const CheckoutHook = ({ price, addedClass }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [axiosSecure, refetch] = useAxiosSecure()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price,axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();




        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        console.log(card)
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setError(error.message)
        } else {
            setError(' ')
            console.log(paymentMethod);
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            // setError(confirmError.message)
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent);
        setProcessing(false)
        if (paymentIntent?.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                user: user?.displayName,
                quantity: addedClass.length,
                addedItemsId: addedClass.map(item => item._id),
                classItemsId: addedClass.map(item => item.class_id),
                itemsName: addedClass.map(item => item.recipeName),
                price,
                paymentId: paymentIntent.id,
                date: new Date(),
                status: "service pending"
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log('db',res.data);
                    if (res.data.insertedId) {
                        refetch();
                        toast.success('your payment Successfully')
                    }
                })
        }

    }
    return (
        <>
            <form className="mx-2 md:mx-10 bg-blue-100 p-5 rounded-lg lg:mx-16" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-blue-500 text-white border-0 hover:bg-blue-400" type="submit" disabled={!stripe || !clientSecret || processing} >
                    payment
                </button>
            </form>
            {
                error && <p className="text-red-500 mt-5">{error}</p>
            }
            {
                transactionId && <p className="mt-3 text-green-500">Transaction is complete with id:{transactionId}</p>
            }
        </>
    );
};

export default CheckoutHook;