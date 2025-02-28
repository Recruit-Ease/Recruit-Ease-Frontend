import { Link } from 'react-router-dom';
import DropdownUser from './DropdownUser';
import LogoDark from '../../images/logo/Logo-3.png';
import LogoLight from '../../images/logo/Logo-2.png';
import useColorMode from '../../hooks/useColorMode';
import { useAuth } from '../../context/AppContext';

const Header = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    const [colorMode] = useColorMode();
    const { isAuthenticated } = useAuth();
    return (
        <header className='sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none'>
            <div className='flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11'>
                <div className='flex items-center gap-8 sm:gap-4 lg:hidden'>
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls='sidebar'
                        onClick={e => {
                            e.stopPropagation();
                            props.setSidebarOpen(!props.sidebarOpen);
                        }}
                        className='z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden'>
                        <span className='relative block h-5.5 w-5.5 cursor-pointer'>
                            <span className='du-block absolute right-0 h-full w-full'>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen &&
                                        '!w-full delay-300'
                                    }`}></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen &&
                                        'delay-400 !w-full'
                                    }`}></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen &&
                                        '!w-full delay-500'
                                    }`}></span>
                            </span>
                            <span className='absolute right-0 h-full w-full rotate-45'>
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen && '!h-0 !delay-[0]'
                                    }`}></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen && '!h-0 !delay-200'
                                    }`}></span>
                            </span>
                        </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}

                    <Link
                        className='block flex-shrink-0 lg:hidden justify-center'
                        to='/'>
                        <img
                            src={colorMode === 'dark' ? LogoDark : LogoDark}
                            alt='Logo'
                            style={{ width: '206px', height: '49px' }}
                        />
                    </Link>
                </div>

                <div className='hidden sm:block'></div>

                <div className='flex items-center gap-3 2xsm:gap-1'>
                    <ul className='flex items-center gap-2 2xsm:gap-4'>
                        {/* <!-- Dark Mode Toggler --> */}
                    </ul>

                    {/* <!-- User Area --> */}

                    {!isAuthenticated ? (
                        <div className='flex flex-row gap-2'>
                            <Link
                                to='/login'
                                className='inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-5 max-sm:hidden'>
                                Login
                            </Link>
                            <Link
                                to='/register-type'
                                className='inline-flex items-center justify-center rounded-md bg-teal-600	 py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4 max-sm:hidden'>
                                Signup
                            </Link>
                        </div>
                    ) : (
                        <DropdownUser />
                    )}
                    {/* <!-- User Area --> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
