import React, {useEffect} from 'react';
import BrandLogo from '../../images/brand/job.jpg';
import { Link, useNavigate } from 'react-router-dom';
import LogoDark from '../../images/logo/Logo-3.png';
import Logo from '../../images/logo/Logo-2.png';
import {useAuth} from '../../context/AppContext';
import Loader from '../../common/Loader';
import toast from 'react-hot-toast';
const Reset: React.FC = () => {

    const {email, resetPassword,didEmailSend } = useAuth();
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [otp, setOtp] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if(email === '' || !didEmailSend){
            navigate('/forgot');
        }
    }, []);

    return (
        <>
        {loading && <Loader />}
        <div className='flex h-screen overflow-hidden'>
            <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full h-full'>
                <div className='flex flex-wrap items-center h-full'>
                    <div className='hidden w-full xl:block xl:w-1/2 h-full'>
                        <div className='py-17.5 px-26 text-center h-full flex flex-col justify-center align-middle, items-center'>
                            <Link
                                className='mb-5.5 inline-block'
                                to='/'>
                                <img
                                    className='hidden dark:block'
                                    src={Logo}
                                    alt='Logo'
                                    style={{ width: '309px', height: '73px' }}
                                />
                                <img
                                    className='dark:hidden'
                                    src={LogoDark}
                                    alt='Logo'
                                    style={{ width: '309px', height: '73px' }}
                                />
                            </Link>

                            <p className='2xl:px-20'>
                                Innovative AI-Driven Hiring Solution for Small
                                Enterprises
                            </p>

                            <span className='mt-15 inline-block'>
                                <img
                                    src={BrandLogo}
                                    alt='Brand Logo'
                                    style={{ scale: '1.2' }}
                                />
                            </span>
                        </div>
                    </div>

                    <div className='w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2 h-full'>
                        <div className='w-full p-4 sm:p-12.5 xl:p-17.5 h-full flex flex-col justify-center relative'>
                            <Link
                                className='lg:hidden flex justify-center absolute top-10 left-0 w-full'
                                to='/'>
                                <img
                                    className='hidden dark:block'
                                    src={Logo}
                                    alt='Logo'
                                    style={{ width: '206px', height: '48px' }}
                                />
                                <img
                                    className='dark:hidden'
                                    src={LogoDark}
                                    alt='Logo'
                                    style={{ width: '206px', height: '48px' }}
                                />
                            </Link>
                            <h2 className='mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 max-sm:text-center'>
                                Reset Password
                            </h2>

                            <form>
                            <div className='mb-4'>
                                    <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                        OTP
                                    </label>
                                    <div className='relative'>
                                        <input
                                            maxLength={6}
                                            type='number'
                                            placeholder='Enter the otp'
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                        />

                                        <span className='absolute right-4 top-4'>
                                            <svg
                                                className='fill-current'
                                                width='22'
                                                height='22'
                                                viewBox='0 0 22 22'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <g opacity='0.5'>
                                                    <path
                                                        d='M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z'
                                                        fill=''
                                                    />
                                                    <path
                                                        d='M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z'
                                                        fill=''
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                        Password
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Enter new password'
                                            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                        />

                                        <span className='absolute right-4 top-4'>
                                            <svg
                                                className='fill-current'
                                                width='22'
                                                height='22'
                                                viewBox='0 0 22 22'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <g opacity='0.5'>
                                                    <path
                                                        d='M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z'
                                                        fill=''
                                                    />
                                                    <path
                                                        d='M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z'
                                                        fill=''
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                        Re-enter Password
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type='password'
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder='Re-enter new password'
                                            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                        />

                                        <span className='absolute right-4 top-4'>
                                            <svg
                                                className='fill-current'
                                                width='22'
                                                height='22'
                                                viewBox='0 0 22 22'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <g opacity='0.5'>
                                                    <path
                                                        d='M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z'
                                                        fill=''
                                                    />
                                                    <path
                                                        d='M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z'
                                                        fill=''
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className='mb-8'>
                                    <button
                                        type='submit'
                                        value='Reset Password'
                                        onClick={(e) => {
                                            if(password !== confirmPassword){
                                                toast.error('Passwords do not match');
                                                return;
                                            }
                                            if(password.length < 8){
                                                toast.error('Password must be at least 8 characters long');
                                                return;
                                            }
                                            setLoading(true);
                                            e.preventDefault();
                                            resetPassword(email, Number(otp), password, confirmPassword);
                                            setLoading(false);
                                        }}
                                        className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
                                    >
                                        Reset Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Reset;
