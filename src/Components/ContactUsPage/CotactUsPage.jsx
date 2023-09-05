
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowUpRightDots,FaEnvelope } from "react-icons/fa6";
import StickySocialIcon from '../StickySocialIcon/StickySocialIcon';

const CotactUsPage = () => {
    return (
        <div>
            <StickySocialIcon></StickySocialIcon>
            <div style={{ backgroundImage: `url('https://img.freepik.com/free-vector/black-wallpaper-with-motion-lines-background_1017-30151.jpg?auto=format&h=200')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-[90%] mx-auto py-20">
                    <h1 className="uppercase text-4xl text-center text-white">FEEL FREE TO CONSULT ABOUT A FEW DETAILS FOR YOUR PROJECT</h1>
                    <p className="text-center text-white my-4">Just simply render your contact details and well be in touch soon. All communications will be answered within 24 hours except for Sundays and Holidays.</p>
                </div>

            </div>
            <section className="bg-cover bg-fixed my-20 w-[90%] mx-auto" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")' }}>
                <div className="flex flex-col min-h-screen bg-black/60">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="mt-8 lg:w-[70%]">
                                <div className="w-full  py-10 mx-auto overflow-hidden  shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                    <h1 className="text-xl font-medium text-white uppercase dark:text-gray-200">CONTACT DETAILS</h1>

                                    <form className="mt-6">
                                        <div className="lg:flex items-center justify-between">
                                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Full Name</label>
                                            <input type="text" placeholder="Full Name" className="block lg:w-[400px] w-full px-5 py-3 mt-2 text-gray-700 bg-inherit border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                        <div className="lg:flex items-center justify-between">
                                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Company</label>
                                            <input type="text" placeholder="Company" className="block lg:w-[400px] w-full px-5 py-3 mt-2 text-gray-700 bg-inherit border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                        <div className="lg:flex items-center justify-between">
                                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Contact Number</label>
                                            <input type="text" placeholder="Number" className="block lg:w-[400px] w-full px-5 py-3 mt-2 text-gray-700 bg-inherit border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                        <div className="lg:flex items-center justify-between">
                                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Email address</label>
                                            <input type="email" placeholder="johndoe@example.com" className="block lg:w-[400px] w-full px-5 py-3 mt-2 text-gray-700 bg-inherit border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                        <div className="lg:flex items-center justify-between">
                                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Website</label>
                                            <input type="text" placeholder="Website" className="block lg:w-[400px] w-full px-5 py-3 mt-2 text-gray-700 bg-inherit border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <h1 className="text-xl font-medium text-white uppercase dark:text-gray-200 mt-20">REQUIRMENT DETAILS</h1>

                                        <div className="lg:flex items-center justify-between">
                                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Requirment Type</label>
                                            <select className="block lg:w-[400px] w-full px-5 py-3 mt-2 text-white bg-inherit border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="" id="" >
                                                <option value="" className="text-black bg-inherit">Please Select Requirment Type</option>
                                                <option value="" className="text-black bg-inherit">Mobile Design</option>
                                                <option value="" className="text-black bg-inherit">Web Design</option>
                                                <option value="" className="text-black bg-inherit">Advance Level</option>
                                            </select>
                                        </div>

                                        <div className="lg:flex items-center justify-between">
                                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Level</label>
                                            <select className="block lg:w-[400px] w-full px-5 py-3 mt-2 text-white bg-inherit border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="" id="" >
                                                <option value="" className="text-black bg-inherit">Please Select Level of Requirment</option>
                                                <option value="" className="text-black bg-inherit">Entry Level</option>
                                                <option value="" className="text-black bg-inherit">Intermediate Level</option>
                                                <option value="" className="text-black bg-inherit">Advance Level</option>

                                            </select>

                                        </div>


                                        <div className="lg:flex items-center justify-between">
                                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Billing Model</label>
                                            <select className="block lg:w-[400px] w-full px-5 py-3 mt-2 text-white bg-inherit border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="" id="" >
                                                <option value="" className="text-black bg-inherit">Please Select Billing Model</option>
                                                <option value="" className="text-black bg-inherit">Project Wise</option>
                                                <option value="" className="text-black bg-inherit">Full Time</option>
                                                <option value="" className="text-black bg-inherit">Part Time</option>
                                            </select>
                                        </div>


                                        <div className="lg:flex items-center justify-between">
                                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Brief Job Description</label>
                                            <input type="text" placeholder="Brief Job Description" className="block lg:w-[400px] w-full px-5 py-3 mt-2 text-gray-700 bg-inherit border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                        <input type="submit" value='Submit' className="my-4 bg-white text-black px-[35px] py-[8px]" />
                                    </form>
                                </div>
                            </div>
                            <div className="text-white lg:w-[30%] lg:mr-6">
                                <div className="bg-[#d9cde7] p-4 text-black">
                                    <div className='my-10'>
                                        <h1 className="uppercase text-md text-black font-semibold">HOW TO START</h1>
                                        <div className='text-black my-3 flex items-center'>
                                            <FaPhoneAlt />
                                            <h3 className='uppercase font-semibold ml-4'>CONTACT</h3>
                                        </div>

                                        <p className='text-justify '>Please submit your project request (RFI/RFQ/RFP) using the contact form or e-mail us at sales@encoders.co.in. We can sign a Non-Disclosure Agreement (NDA) before sharing any business sensitive information.</p>
                                    </div>

                                    <div className='my-10'>
                                        <div className='text-black my-3 flex items-center'>
                                            <FaArrowUpRightDots />
                                            <h3 className='uppercase font-semibold ml-4'>ANALYSIS</h3>
                                        </div>

                                        <p className='text-justify '>Encoders consultant will contact you to clarify your project requirements. We involve subject matter experts during this stage to elaborate and propose the optimal technical and business solution.</p>
                                    </div>


                                    <div className='my-10'>
                                        <h1 className="uppercase text-md text-black font-semibold">HOW TO START</h1>
                                        <div className='text-black my-3 flex items-center'>
                                            <FaEnvelope />
                                            <h3 className='uppercase font-semibold ml-4'>PROPOSAL</h3>
                                        </div>

                                        <p className='text-justify '>Having clarified the requirements we will provide our free non-binding bid or proposal for your review. We will be glad to provide any clarifications required and adjust the proposal through negotiation process.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CotactUsPage;