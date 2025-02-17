import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resendOTP, verifyOtp } from '../api/userApi.ts';
import { login } from '../redux/store/slice/userSlice.ts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAnalytics, logEvent } from 'firebase/analytics';

const OTPInput: React.FC = () => {
    const { email }: any = useParams<{ email: string }>();
    const { password }: any = useParams<{ password: string }>();
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const [timer, setTimer] = useState<number>(60);
    const [resendEnabled, setResendEnabled] = useState<boolean>(false);
    const [authToken, setAuthToken] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setResendEnabled(true);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleResend = async () => {
        if (!resendEnabled) return;
        setOtp(Array(6).fill(''));
        setTimer(60);
        setResendEnabled(false);
        try {
            const resendData = await resendOTP(email);
            if (resendData && resendData.msg === 'A new OTP has been sent to your email. Please enter the OTP to complete your sign-in.') {
                toast.info('A new OTP has been sent to your email.');
            } else {
                toast.error('Resend failed, We were unable to resend the OTP. Please check your email address or try again later.')
            }
        } catch (error) {
            console.log("OTP error", error);
            toast.error('An unexpected error occurred while trying to resend the OTP. Please try again.')
        }
    };

    const handleChange = (value: string, index: number) => {
        if (!/\d/.test(value) && value !== '') return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < otp.length - 1) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleSubmit = async () => {
        const enteredOtp = otp.join('');
        try {
            const otpData = await verifyOtp(email, password, enteredOtp);
            if (otpData && otpData.token) {
                setAuthToken(otpData.token);
                localStorage.setItem('token', otpData.token)
                dispatch(login({
                    userId: otpData.userId,
                    token: otpData.token
                }))
                const analytics = getAnalytics();
                logEvent(analytics, 'login');
                toast.success("Login Successful!")
                navigate("/dashboard")
            } else {
                toast.error("Login Failed, Please check your credentials.")
            }
        } catch (error) {
            console.log('Error', error)
            toast.error("Login Failed, Please check your credentials.")
        }
    };

    return (

        <section className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 justify-center items-center">
            <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">Enter OTP</h1>
                <p className="text-sm text-gray-600 mb-6 text-center">
                    Enter the 6-digit OTP sent to <span className="font-medium text-gray-800">{email}</span>
                </p>
                <div className="flex justify-center gap-2 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ))}
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 mb-4"
                >
                    Verify OTP
                </button>
                <div className="text-center">
                    <button
                        onClick={handleResend}
                        disabled={!resendEnabled}
                        className={`text-blue-500 font-medium ${resendEnabled ? 'hover:underline' : 'opacity-50 cursor-not-allowed'}`}
                    >
                        Resend OTP
                    </button>
                    <p className="text-sm text-gray-500 mt-2">{!resendEnabled && `Resend available in ${timer}s`}</p>
                </div>
            </div>
        </section>
    );
};

export default OTPInput;
