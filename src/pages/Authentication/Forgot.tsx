import React from 'react';
import BrandLogo from '../../images/brand/job.jpg';
import { Link } from 'react-router-dom';
import LogoDark from '../../images/logo/Logo-3.png';
import Logo from '../../images/logo/Logo-2.png';
const Forgot: React.FC = () => {
    return (
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
                                        Email
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type='email'
                                            placeholder='Enter your email'
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
                                                        d='M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z'
                                                        fill=''
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <p className='mb-4 text-right'>
                                    <Link
                                        to='/login'
                                        className='text-black'>
                                        Back to Login?
                                    </Link>
                                </p>
                                <div className='mb-8'>
                                    <input
                                        type='submit'
                                        value='Forgot Password'
                                        className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot;
