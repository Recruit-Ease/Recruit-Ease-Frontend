import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link } from 'react-router-dom';

interface CardDataStatsProps {
    jobTitle: string;
    location: string;
    applicants: number;
    daysLeft: number;
    appliedToday: number;
}

const cardData: CardDataStatsProps[] = [
    {
        jobTitle: 'Frontend Developer',
        location: 'New York, NY',
        applicants: 150,
        daysLeft: 5,
        appliedToday: 10
    },
    {
        jobTitle: 'Backend Developer',
        location: 'San Francisco, CA',
        applicants: 120,
        daysLeft: 10,
        appliedToday: 15
    },
    {
        jobTitle: 'Project Manager',
        location: 'Los Angeles, CA',
        applicants: 80,
        daysLeft: 3,
        appliedToday: 5
    },
    {
        jobTitle: 'Software Developer',
        location: 'Chicago, IL',
        applicants: 200,
        daysLeft: 7,
        appliedToday: 20
    }
];

const Dashboard: React.FC = () => {
    return (
        <DefaultLayout>
            <div className='flex flex-row mb-5 justify-between items-center'>
                <h2 className='text-2xl font-semibold dark:text-white '>
                    Current Openings (15)
                </h2>
                <div className='text-primary font-bold'>
                    <Link to='/jobs'>
                        <a className=''>See All</a>
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
                {cardData.map((data, index) => (
                    <CardDataStats
                        key={index}
                        jobTitle={data.jobTitle}
                        location={data.location}
                        applicants={data.applicants}
                        daysLeft={data.daysLeft}
                        appliedToday={data.appliedToday}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            x='0px'
                            y='0px'
                            width='24'
                            height='24'
                            viewBox='0 0 48 48'>
                            <path
                                fill='#424242'
                                d='M27,7h-6c-1.7,0-3,1.3-3,3v3h2v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h2v-3C30,8.3,28.7,7,27,7z'></path>
                            <path
                                fill='#E65100'
                                d='M40,43H8c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,41.2,42.2,43,40,43z'></path>
                            <path
                                fill='#FF6E40'
                                d='M40,28H8c-2.2,0-4-1.8-4-4v-9c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v9C44,26.2,42.2,28,40,28z'></path>
                            <path
                                fill='#FFF3E0'
                                d='M26,26h-4c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v2C27,25.6,26.6,26,26,26z'></path>
                        </svg>
                    </CardDataStats>
                ))}
            </div>

            <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
                <div className='col-span-12 xl:col-span-16'>
                    <TableOne />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Dashboard;
