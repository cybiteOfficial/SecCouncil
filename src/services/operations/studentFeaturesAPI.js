// import { toast } from "react-hot-toast";
// import { studentEndpoints } from "../apis";
// import { apiConnector } from "../apiconnector";
// import rzpLogo from "../../assets/Logo/rzp_logo.png"
// import { setPaymentLoading } from "../../slices/courseSlice";
// import { resetCart } from "../../slices/cartSlice";


// const {COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API} = studentEndpoints;

// function loadScript(src) {
//     return new Promise((resolve) => {
//         const script = document.createElement("script");
//         script.src = src;

//         script.onload = () => {
//             resolve(true);
//         }
//         script.onerror= () =>{
//             resolve(false);
//         }
//         document.body.appendChild(script);
//     })
// }


// export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
//     const toastId = toast.loading("Loading...");
//     try{
//         //load the script
//         const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//         if(!res) {
//             toast.error("RazorPay SDK failed to load");
//             return;
//         }

//         //initiate the order
//         const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, 
//                                 {courses},
//                                 {
//                                     Authorization: `Bearer ${token}`,
//                                 })

//         if(!orderResponse.data.success) {
//             throw new Error(orderResponse.data.message);
//         }
//         console.log("PRINTING orderResponse", orderResponse);
//         //options
//         const options = {
//             key: process.env.RAZORPAY_KEY,
//             currency: orderResponse.data.message.currency,
//             amount: `${orderResponse.data.message.amount}`,
//             order_id:orderResponse.data.message.id,
//             name:"StudyNotion",
//             description: "Thank You for Purchasing the Course",
//             image:rzpLogo,
//             prefill: {
//                 name:`${userDetails.firstName}`,
//                 email:userDetails.email
//             },
//             handler: function(response) {
//                 //send successful wala mail
//                 sendPaymentSuccessEmail(response, orderResponse.data.message.amount,token );
//                 //verifyPayment
//                 verifyPayment({...response, courses}, token, navigate, dispatch);
//             }
//         }
//         //miss hogya tha 
//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
//         paymentObject.on("payment.failed", function(response) {
//             toast.error("oops, payment failed");
//             console.log(response.error);
//         })

//     }
//     catch(error) {
//         console.log("PAYMENT API ERROR.....", error);
//         toast.error("Could not make Payment");
//     }
//     toast.dismiss(toastId);
// }




// // export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
// //     const toastId = toast.loading("Loading...");
// //     try {
// //         // Load the Razorpay checkout script
// //         const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

// //         if (!res) {
// //             toast.error("RazorPay SDK failed to load");
// //             return;
// //         }

// //         // Initiate the order by calling the COURSE_PAYMENT_API
// //         const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, 
// //                                 { courses },
// //                                 {
// //                                     Authorization: `Bearer ${token}`,
// //                                 });

// //         // Check if the response indicates success
// //         if (!orderResponse?.data?.success) {
// //             throw new Error(orderResponse?.data?.message || "Failed to initiate order.");
// //         }

// //         // Extract payment data from the response
// //         const paymentData = orderResponse.data.data; // Updated to access data object

// //         console.log("PRINTING orderResponse", paymentData);

// //         // Razorpay payment options
// //         const options = {
// //             key: process.env.RAZORPAY_KEY || 'your-razorpay-key', // Ensure the Razorpay key is set
// //             currency: paymentData.currency,   // Access currency from paymentData
// //             amount: `${paymentData.amount}`,  // Access amount from paymentData
// //             order_id: paymentData.id,         // Access order id from paymentData
// //             name: "StudyNotion",
// //             description: "Thank You for Purchasing the Course",
// //             image: rzpLogo,                   // Your logo for the checkout page
// //             prefill: {
// //                 name: `${userDetails.firstName}`,
// //                 email: userDetails.email
// //             },
// //             handler: function (response) {
// //                 // Send payment success email
// //                 sendPaymentSuccessEmail(response, paymentData.amount, token);
                
// //                 // Verify the payment and enroll the user in the course
// //                 verifyPayment({ ...response, courses }, token, navigate, dispatch);
// //             },
// //         };

// //         // Create and open the Razorpay payment modal
// //         const paymentObject = new window.Razorpay(options);
// //         paymentObject.open();

// //         // Handle payment failure
// //         paymentObject.on("payment.failed", function (response) {
// //             toast.error("Oops, payment failed");
// //             console.log(response.error);
// //         });

// //     } catch (error) {
// //         console.log("PAYMENT API ERROR.....", error);
// //         toast.error("Could not make Payment");
// //     }
// //     toast.dismiss(toastId);
// // }





// export async function sendPaymentSuccessEmail(response, amount, token) {
//     try{
//         await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
//             orderId: response.razorpay_order_id,
//             paymentId: response.razorpay_payment_id,
//             amount,
//         },{
//             Authorization: `Bearer ${token}`
//         })
//     }
//     catch(error) {
//         console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
//         logger.info("PAYMENT SUCCESS EMAIL ERROR....", error, FILE_PATH);
//     }
// }

// //verify payment
// export async function verifyPayment(bodyData, token, navigate, dispatch) {
//     const toastId = toast.loading("Verifying Payment....");
//     dispatch(setPaymentLoading(true));
//     try{
//         const response  = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
//             Authorization:`Bearer ${token}`,
//         })

//         if(!response.data.success) {
//             throw new Error(response.data.message);
//         }
//         toast.success("payment Successful, ypou are addded to the course");
//         navigate("/dashboard/enrolled-courses");
//         dispatch(resetCart());
//     }   
//     catch(error) {
//         console.log("PAYMENT VERIFY ERROR....", error);
//         logger.info("PAYMENT VERIFY ERROR....", error, FILE_PATH);
//         toast.error("Could not verify Payment");
//     }
//     toast.dismiss(toastId);
//     dispatch(setPaymentLoading(false));
// }










import { toast } from "react-hot-toast";
import { studentEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import rzpLogo from "../../assets/Logo/rzp_logo.png";
import { setPaymentLoading } from "../../slices/courseSlice";
import { resetCart } from "../../slices/cartSlice";

<<<<<<< HEAD
=======

>>>>>>> 93ba38d1c4ac35be5d0461b3f339f369a7e2d505
const { COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API } = studentEndpoints;

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(true);
<<<<<<< HEAD
        };
=======
        }
>>>>>>> 93ba38d1c4ac35be5d0461b3f339f369a7e2d505
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

<<<<<<< HEAD
// export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
//     const toastId = toast.loading("Loading...");
//     try {
//         // Load the Razorpay script
=======

// export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
//     const toastId = toast.loading("Loading...");
//     try {
//         //load the script
>>>>>>> 93ba38d1c4ac35be5d0461b3f339f369a7e2d505
//         const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//         if (!res) {
//             toast.error("RazorPay SDK failed to load");
//             return;
//         }

<<<<<<< HEAD
//         // Initiate the order by calling the payment API
//         const orderResponse = await apiConnector(
//             "POST",
//             COURSE_PAYMENT_API,
//             { courses },
//             { Authorization: `Bearer ${token}` }
//         );

//         // Log the entire response to validate structure
//         console.log("Order Response:", orderResponse);

//         // Extract data from the response
//         const paymentData = orderResponse?.data; // Adjust to match the correct API response structure
//         if (!paymentData?.success) {
//             throw new Error(paymentData?.message || "Failed to initiate order.");
//         }

//         // Configure Razorpay options
//         const options = {
//             key: process.env.RAZORPAY_KEY || "your-razorpay-key", // Ensure your Razorpay key is set
//             currency: paymentData.currency, // Access currency from response
//             amount: `${paymentData.amount}`, // Access amount from response
//             order_id: paymentData.id, // Access order ID from response
=======
//         //initiate the order
//         const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API,
//             { courses },
//             {
//                 Authorization: `Bearer ${token}`,
//             })

//         if (!orderResponse.data.success) {
//             throw new Error(orderResponse.data.message);
//         }
//         console.log("PRINTING orderResponse", orderResponse);
//         //options
//         const options = {
//             key: process.env.RAZORPAY_KEY,
//             currency: orderResponse.data.message.currency,
//             amount: `${orderResponse.data.message.amount}`,
//             order_id: orderResponse.data.message.id,
>>>>>>> 93ba38d1c4ac35be5d0461b3f339f369a7e2d505
//             name: "StudyNotion",
//             description: "Thank You for Purchasing the Course",
//             image: rzpLogo,
//             prefill: {
//                 name: `${userDetails.firstName}`,
//                 email: userDetails.email,
//             },
//             handler: function (response) {
<<<<<<< HEAD
//                 // Send payment success email
//                 sendPaymentSuccessEmail(response, paymentData.amount, token);

//                 // Verify the payment and enroll the user
=======
//                 //send successful wala mail
//                 sendPaymentSuccessEmail(response, orderResponse.data.message.amount, token);
//                 //verifyPayment
>>>>>>> 93ba38d1c4ac35be5d0461b3f339f369a7e2d505
//                 verifyPayment({ ...response, courses }, token, navigate, dispatch);
//             }
//         }
//         //miss hogya tha 
//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
//         paymentObject.on("payment.failed", function (response) {
//             toast.error("oops, payment failed");
//             console.log(response.error);
<<<<<<< HEAD
//         });
//     } catch (error) {
//         console.error("PAYMENT API ERROR:", error);
=======
//         })

//     }
//     catch (error) {
//         console.log("PAYMENT API ERROR.....", error);
>>>>>>> 93ba38d1c4ac35be5d0461b3f339f369a7e2d505
//         toast.error("Could not make Payment");
//     } finally {
//         toast.dismiss(toastId);
//     }
// }


export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading...");
    try {
        // Load the Razorpay script
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            toast.error("RazorPay SDK failed to load");
            return;
        }

<<<<<<< HEAD
        // Initiate the order by calling the payment API
        const orderResponse = await apiConnector(
            "POST",
            COURSE_PAYMENT_API,
            { courses },
            { Authorization: `Bearer ${token}` }
        );

        // More precise data extraction
        const paymentData = orderResponse?.data?.data;

        if (!paymentData) {
            throw new Error("Invalid payment response");
        }

        // Configure Razorpay options
        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY || "rzp_test_URe1o2PPOt9CiG", // Use your actual key
            amount: paymentData.amount, 
            currency: paymentData.currency,
            name: "StudyNotion",
            description: "Course Purchase",
            order_id: paymentData.id,
            image: rzpLogo,
            prefill: {
                name: `${userDetails.firstName}`,
                email: userDetails.email,
            },
            handler: function (response) {
                // Send payment success email
                sendPaymentSuccessEmail(response, paymentData.amount, token);

                // Verify the payment and enroll the user
                verifyPayment({ ...response, courses }, token, navigate, dispatch);
            },
            theme: {
                color: "#3399cc"
            }
        };

        // Create and open the Razorpay payment modal
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        // Handle payment failure
        paymentObject.on("payment.failed", function (response) {
            toast.error("Oops, payment failed");
            console.log(response.error);
        });
    } catch (error) {
        console.error("PAYMENT API ERROR:", error);
        toast.error(`Payment Error: ${error.message}`);
    } finally {
        toast.dismiss(toastId);
    }
}

export async function sendPaymentSuccessEmail(response, amount, token) {
    try {
        await apiConnector(
            "POST",
            SEND_PAYMENT_SUCCESS_EMAIL_API,
            {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                amount,
            },
            { Authorization: `Bearer ${token}` }
        );
    } catch (error) {
        console.error("PAYMENT SUCCESS EMAIL ERROR:", error);
    }
}

// Verify payment
export async function verifyPayment(bodyData, token, navigate, dispatch) {
    const toastId = toast.loading("Verifying Payment...");
    dispatch(setPaymentLoading(true));
    try {
        const response = await apiConnector(
            "POST",
            COURSE_VERIFY_API,
            bodyData,
            { Authorization: `Bearer ${token}` }
        );

        if (!response?.data?.success) {
            throw new Error(response?.data?.message || "Failed to verify payment.");
=======
export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading...");
    try {
        // Load the Razorpay checkout script
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            toast.error("RazorPay SDK failed to load");
            return;
        }

        // Initiate the order by calling the COURSE_PAYMENT_API
        const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, 
                                { courses },
                                {
                                    Authorization: `Bearer ${token}`,
                                });

        // Check if the response indicates success
        if (!orderResponse?.data?.success) {
            throw new Error(orderResponse?.data?.message || "Failed to initiate order.");
        }

        // Extract payment data from the response
        const paymentData = orderResponse.data.data; // Updated to access data object

        console.log("PRINTING orderResponse", paymentData);

        // Razorpay payment options
        const options = {
            key: process.env.RAZORPAY_KEY || 'rzp_test_URe1o2PPOt9CiG', // Ensure the Razorpay key is set
            currency: paymentData.currency,   // Access currency from paymentData
            amount: `${paymentData.amount}`,  // Access amount from paymentData
            order_id: paymentData.id,         // Access order id from paymentData
            name: "StudyNotion",
            description: "Thank You for Purchasing the Course",
            image: rzpLogo,                   // Your logo for the checkout page
            prefill: {
                name: `${userDetails.firstName}`,
                email: userDetails.email
            },
            handler: function (response) {
                // Send payment success email
                sendPaymentSuccessEmail(response, paymentData.amount, token);

                // Verify the payment and enroll the user in the course
                verifyPayment({ ...response, courses }, token, navigate, dispatch);
            },
        };

        // Create and open the Razorpay payment modal
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        // Handle payment failure
        paymentObject.on("payment.failed", function (response) {
            toast.error("Oops, payment failed");
            console.log(response.error);
        });

    } catch (error) {
        console.log("PAYMENT API ERROR.....", error);
        toast.error("Could not make Payment");
    }
    toast.dismiss(toastId);
}





export async function sendPaymentSuccessEmail(response, amount, token) {
    try {
        await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            amount,
        }, {
            Authorization: `Bearer ${token}`
        })
    }
    catch (error) {
        console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
        logger.info("PAYMENT SUCCESS EMAIL ERROR....", error, FILE_PATH);
    }
}

//verify payment
export async function verifyPayment(bodyData, token, navigate, dispatch) {
    const toastId = toast.loading("Verifying Payment....");
    dispatch(setPaymentLoading(true));
    try {
        const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
            Authorization: `Bearer ${token}`,
        })

        if (!response.data.success) {
            throw new Error(response.data.message);
>>>>>>> 93ba38d1c4ac35be5d0461b3f339f369a7e2d505
        }

        toast.success("Payment Successful! You are enrolled in the course.");
        navigate("/dashboard/enrolled-courses");
        dispatch(resetCart());
<<<<<<< HEAD
    } catch (error) {
        console.error("PAYMENT VERIFY ERROR:", error);
=======
    }
    catch (error) {
        console.log("PAYMENT VERIFY ERROR....", error);
        logger.info("PAYMENT VERIFY ERROR....", error, FILE_PATH);
>>>>>>> 93ba38d1c4ac35be5d0461b3f339f369a7e2d505
        toast.error("Could not verify Payment");
    } finally {
        toast.dismiss(toastId);
        dispatch(setPaymentLoading(false));
    }
}
