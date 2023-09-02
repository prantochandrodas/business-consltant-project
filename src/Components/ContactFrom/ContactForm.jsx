

const ContactForm = () => {
    return (
        <div className="bg-white">
            <div className="py-20 w-[90%] mx-auto">
                <div>
                    <h1 className="font-semibold text-2xl uppercase">YOU HAVE AN IDEA SHARE WITH US</h1>
                    <p>Thank you for your interest in Encoders and our services. Please fill out the form below, or e-mail us at sales@encoders.co.in and we will get back to you promptly regarding your request.</p>
                </div>
                <div className="my-10 lg:flex">
                    <img src="https://cdn.pixabay.com/photo/2021/08/15/05/24/team-6546796_1280.jpg" className="lg:w-[600px]" alt="" />
                    <div className="lg:w-[400px] lg:pl-4">
                        <form action="">
                            {/* name */}
                            <div className="my-4">
                                <label htmlFor="name" className="block text-xs font-medium text-black-700">
                                    Name
                                </label>
                                <input type="text" id="name"  className="mt-1 w-full py-2 rounded-[5px] border border-black shadow-sm sm:text-sm" />
                            </div>

                            {/* email */}
                            <div className="my-4">
                                <label htmlFor="UserEmail" className="block text-xs font-medium text-black-700">
                                    Email
                                </label>
                                <input type="email" id="UserEmail" placeholder="john@rhcp.com" className="mt-1 w-full py-2 rounded-[5px] pl-4 border border-black shadow-sm sm:text-sm" />
                            </div>


                            {/* phone */}
                            <div className="my-4">
                                <label htmlFor="name" className="block text-xs font-medium text-black-700">
                                    phone
                                </label>
                                <input type="text" id="name"  className="mt-1 w-full py-2 rounded-[5px] border border-black shadow-sm sm:text-sm" />
                            </div>


                            {/* your idea */}
                            <div className="my-4">
                                <label htmlFor="name" className="block text-xs font-medium text-black-700">
                                    Your Idea
                                </label>
                                <input type="text" id="name"  className="mt-1 w-full py-2 rounded-[5px] border border-black shadow-sm sm:text-sm" />
                            </div>
                            

                            <input type="submit" value='submit' className="pt-[8px] pb-[8px] px-[35px] m-[10px 0 0 0] bg-[#252525] text-[#fff] uppercase" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;