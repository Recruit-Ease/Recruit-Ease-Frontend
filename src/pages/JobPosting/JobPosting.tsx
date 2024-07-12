import DefaultLayout from '../../layout/DefaultLayout';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import SingleOption from '../../components/Forms/SelectGroup/SingleOption';
import MultiSelectJobPosting from '../../components/Forms/MultiSelectJobPosting';
import SoftSkillOptions from './SoftSkillsOptions.json';
import TechSkillOptions from './TechSkillsOptions.json';
import { Job } from '../../types/job';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/AppContext';
import { Option } from '../../types/option';
import Swtich from '../../components/Switchers/Switch';

const JobPosting = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDepartment, setJobDepartment] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postingDate, setPostingDate] = useState(new Date().toISOString());
    const [deadline, setDeadline] = useState(addDaysToDate(30));
    const [softSkills, setSoftSkills] = useState<Option[]>(SoftSkillOptions);
    const [technicalSkills, setTechnicalSkills] =
        useState<Option[]>(TechSkillOptions);

    const [questions, setQuestions] = useState([
        { question: 'Tell me about yourself?' }
    ]);
    const [recruiterName, setRecruiterName] = useState('');
    const [recruiterEmail, setRecruiterEmail] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [keyRequirements, setKeyRequirements] = useState('');
    const [niceToHave, setNiceToHave] = useState('');
    const [otherRemarks, setOtherRemarks] = useState('');
    const [isActive, setIsActive] = useState(true);

    const [isEditOrNew, setIsEditOrNew] = useState(false);

    const deleteQuestion = (index: number) => {
        console.log('Deleting index:', index);
        const newQuestions = questions.filter((_, i) => i !== index);
        console.log('New questions:', newQuestions);
        setQuestions([...newQuestions]);
    };

    function addDaysToDate(days: number) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + days);
        return currentDate.toISOString();
    }

    const updateQuestion = (index: number, value: string) => {
        const newQuestions = questions.map((question, i) => {
            if (i === index) {
                return { question: value };
            }
            return question;
        });
        setQuestions([...newQuestions]);
    };
    const { createJobPosting } = useAuth();

    const handleSubmit = async () => {
        const jobData: Job = {
            title: jobTitle,
            department: jobDepartment,
            city,
            country,
            posting_date: new Date(postingDate), // Convert ISO string to Date
            expiration_date: new Date(deadline), // Convert ISO string to Date
            soft_skills: softSkills.map((skill) => skill.value),
            technical_skills: technicalSkills.map((skill) => skill.value),
            questions: questions.map((q) => q.question),
            recruiter_name: recruiterName,
            recruiter_email: recruiterEmail,
            about_company: companyDescription,
            about_job: jobDescription,
            qualification: qualifications,
            key_requirements: keyRequirements,
            nice_to_have: niceToHave,
            other_remarks: otherRemarks,
            is_active: isActive
        };

        // Verify if all required fields are filled

        if (
            !jobTitle ||
            !jobDepartment ||
            !city ||
            !country ||
            !postingDate ||
            !deadline ||
            !softSkills ||
            !technicalSkills ||
            !questions ||
            !recruiterName ||
            !recruiterEmail ||
            !companyDescription ||
            !jobDescription ||
            !qualifications ||
            !keyRequirements
        ) {
            toast.error('Please fill all required fields.');
            return;
        }
        const success = await createJobPosting(jobData);

        if (success) {
            console.log('Job posted successfully!');
        } else {
            console.error('Failed to post job.');
        }
    };

    return (
        <DefaultLayout>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-3'>
                Job Posting
            </h2>
            <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
                <div className='flex flex-col gap-9'>
                    {/* <!-- Input Fields --> */}
                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Job Information
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5.5 p-6.5'>
                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    Job Title
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter Job Title'
                                    value={jobTitle}
                                    disabled={isEditOrNew}
                                    onChange={(e) =>
                                        setJobTitle(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                />
                            </div>
                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    Job Department
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter Department'
                                    disabled={isEditOrNew}
                                    value={jobDepartment}
                                    onChange={(e) =>
                                        setJobDepartment(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Job Location Information
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5.5 p-6.5'>
                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    City
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter City'
                                    value={city}
                                    disabled={isEditOrNew}
                                    onChange={(e) => setCity(e.target.value)}
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                />
                            </div>
                            <SingleOption
                                label={'Country'}
                                options={['USA', 'UK', 'Canada']}
                                selectedOption={country}
                                disabled={isEditOrNew}
                                setSelectedOption={(value) =>
                                    country == 'Select Country'
                                        ? setCountry('')
                                        : setCountry(value)
                                }
                                icon={
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 20 20'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <g opacity='0.8'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z'
                                                fill='#637381'></path>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z'
                                                fill='#637381'></path>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z'
                                                fill='#637381'></path>
                                        </g>
                                    </svg>
                                }
                            />
                        </div>
                    </div>

                    {/* <!-- Time and date --> */}
                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Posting Date & Deadline Time
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5.5 p-6.5'>
                            <DatePickerOne
                                label={'Posting Date'}
                                disabled={isEditOrNew}
                                selectedDate={postingDate}
                                setSelectedDate={setPostingDate}
                            />
                            <DatePickerOne
                                label={'Deadline'}
                                selectedDate={deadline}
                                disabled={isEditOrNew}
                                setSelectedDate={setDeadline}
                            />
                        </div>
                    </div>

                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Soft Skills
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5.5 p-6.5'>
                            <MultiSelectJobPosting
                                id='multiSelectSoft'
                                label={'Soft Skills'}
                                options={softSkills}
                                disabled={isEditOrNew}
                                setOptions={setSoftSkills}
                            />
                        </div>
                    </div>

                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Technical Skills
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5.5 p-6.5'>
                            <MultiSelectJobPosting
                                id='multiSelectTech'
                                label={'Technical Skills'}
                                options={technicalSkills}
                                disabled={isEditOrNew}
                                setOptions={setTechnicalSkills}
                            />
                        </div>
                    </div>

                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Soft Skill Assessment Questions
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5.5 p-6.5'>
                            {questions.map((question, index) => {
                                return (
                                    <div key={index}>
                                        <label className='mb-3 block text-black dark:text-white'>
                                            Question-{index + 1}
                                        </label>
                                        <div className='flex gap-2'>
                                            <input
                                                type='text'
                                                placeholder='Enter Question'
                                                disabled={isEditOrNew}
                                                value={question.question}
                                                onChange={(e) => {
                                                    updateQuestion(
                                                        index,
                                                        e.target.value
                                                    );
                                                }}
                                                className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                            />
                                            <Link
                                                to='#'
                                                className={`inline-flex items-center justify-center rounded-md border py-4 px-10 text-center font-medium transition ${
                                                    isEditOrNew
                                                        ? 'cursor-default text-gray-500 bg-whiter dark:bg-black border-stroke dark:border-form-strokedark'
                                                        : 'border-black text-black hover:bg-opacity-90 focus:border-primary active:border-primary dark:bg-form-input dark:focus:border-primary dark:text-white'
                                                } lg:px-4 xl:px-4`}>
                                                <BsFillTrashFill
                                                    className='delete-btn cursor-pointer '
                                                    onClick={() =>
                                                        !isEditOrNew &&
                                                        deleteQuestion(index)
                                                    }
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                            <Link
                                to='#'
                                className={`mb-2 flex items-center justify-center rounded border py-4 px-10 text-center font-medium transition ${
                                    isEditOrNew
                                        ? 'cursor-default text-gray-500 bg-whiter dark:bg-black border-stroke dark:border-form-strokedark'
                                        : 'border-black text-black hover:bg-opacity-90 focus:border-primary active:border-primary dark:bg-form-input dark:focus:border-primary dark:text-white'
                                } lg:px-8 xl:px-10`}
                                onClick={() => {
                                    if (isEditOrNew) return;
                                    const newQuestions = [
                                        ...questions,
                                        { question: '' }
                                    ];
                                    setQuestions(newQuestions);
                                }}>
                                Add New Question
                            </Link>
                        </div>
                    </div>
                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Recruiter Contact Information
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5.5 p-6.5'>
                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    Recruiter Name
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter Recruiter Name'
                                    value={recruiterName}
                                    disabled={isEditOrNew}
                                    onChange={(e) =>
                                        setRecruiterName(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                />
                            </div>
                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    Recruiter Email
                                </label>
                                <input
                                    type='email'
                                    placeholder='Enter Recruiter Email'
                                    value={recruiterEmail}
                                    disabled={isEditOrNew}
                                    onChange={(e) =>
                                        setRecruiterEmail(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-9'>
                    {/* <!-- Textarea Fields --> */}
                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Job Description
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5.5 p-6.5'>
                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    About the Company
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder='Enter Company Description'
                                    value={companyDescription}
                                    disabled={isEditOrNew}
                                    onChange={(e) =>
                                        setCompanyDescription(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'></textarea>
                            </div>

                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    About the Job
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder='Enter Job Description here...'
                                    value={jobDescription}
                                    disabled={isEditOrNew}
                                    onChange={(e) =>
                                        setJobDescription(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'></textarea>
                            </div>

                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    Qaulifications
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder='Enter Qualifications here...'
                                    value={qualifications}
                                    disabled={isEditOrNew}
                                    onChange={(e) =>
                                        setQualifications(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'></textarea>
                            </div>
                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    Key Requirements
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder='Enter Key Requirements'
                                    value={keyRequirements}
                                    disabled={isEditOrNew}
                                    onChange={(e) =>
                                        setKeyRequirements(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'></textarea>
                            </div>

                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    Nice to have
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder='Enter Nice to have information here...'
                                    value={niceToHave}
                                    disabled={isEditOrNew}
                                    onChange={(e) =>
                                        setNiceToHave(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'></textarea>
                            </div>

                            <div>
                                <label className='mb-3 block text-black dark:text-white'>
                                    Other Remarks
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder='Enter Remarks'
                                    value={otherRemarks}
                                    disabled={isEditOrNew}
                                    onChange={(e) =>
                                        setOtherRemarks(e.target.value)
                                    }
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark flex flex-row justify-center gap-5 items-center'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Job Posting Status
                            </h3>
                            <Swtich
                                isActive={isActive}
                                setIsActive={setIsActive}
                                disabled={isEditOrNew}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 mx-5'>
                        <button className='inline-flex items-center justify-center rounded-md bg-teal-600	 py-3 px-8 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4'>
                            Edit
                        </button>
                        <button
                            className='inline-flex items-center justify-center rounded-md bg-primary py-3 px-8 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-5'
                            onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default JobPosting;
