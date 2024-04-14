"use client";
import { useEffect } from "react";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { AuthContextType } from "../../types/auth/login.types";
import { useCourse } from "../../context/course-context";
import { CourseContextType } from "../../types/course/registration.types";
import { Button } from "../../components/ui/button";
import CourseItem from "../../components/course/courseItem";
import CourseFooter from "../../components/course/courseFooter";
import { useRegisterCourse } from "../../services/course/hooks";
const PaymentPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth() as AuthContextType;
  const { courses, totalFee, totalCreditUnits } =
    useCourse() as CourseContextType;

  useEffect(() => {
    if (courses.length === 0 || totalFee === 0) {
      navigate("/course-register");
    } // eslint-disable-next-line
  }, [courses.length, totalFee]);

  // with flutterwave
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY!,
    tx_ref: Date.now().toString(),
    amount: totalFee,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user?.email!, // eslint-disable-line @typescript-eslint/no-non-null-asserted-optional-chain
      name: user?.name!, // eslint-disable-line @typescript-eslint/no-non-null-asserted-optional-chain
      phone_number: "08023323222",
    },
    customizations: {
      title: "CourseReg",
      description: "Payment for course registration",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: async () => {
      console.log("Payment success!");
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("Payment cancelled!");
      navigate("/");
    },
  };
  const handleFlutterPayment = useFlutterwave(fwConfig);
  const { mutate } = useRegisterCourse();

  const handlePayment = () => {
    handleFlutterPayment({
      callback: async () => {
        try {
          // mutate here
          mutate({
            courses: courses.map((course) => course._id),
            fee: totalFee,
          });
          toast.success("Successfully registered");
          navigate("/dashboard");
        } catch (error) {
          console.log("Reservation failed:", error);
          toast.error("Registration failed");
          navigate("/");
        } finally {
          closePaymentModal();
        }
      },
      onClose: () => {
        toast.info("Cancelled payment!");
        navigate("/");
      },
    });
  };
  return (
    <div className="flex flex-col gap-4 items-center p-5 w-full rounded-md bg-slate-50 mt-10">
      <h1 className="text-xl md:text-3xl font-bold text-primary">
        Course Registration Confirmation
      </h1>
      <p>
        You are about to register {courses.length} courses. Kindly confirm your
        selection before proceeding to payment
      </p>
      <div className="w-full flex flex-col gap-3 md:w-2/3 p-2">
        {courses.map((course) => (
          <CourseItem {...course} key={course._id} className="bg-slate-200" />
        ))}
        <CourseFooter
          totalCreditUnit={totalCreditUnits}
          totalFee={totalFee}
          className="bg-primary text-white"
        />
        <div className="flex justify-between md:justify-start items-center gap-5">
          <Button
            className="bg-red-600 text-white"
            text="Go back"
            onClick={() => {
              navigate(-1);
            }}
          />
          <Button
            className="bg-primary text-white"
            size={"lg"}
            text="Pay now"
            onClick={handlePayment}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
