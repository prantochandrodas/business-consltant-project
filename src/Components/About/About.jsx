import bgimage from '../../assets/image.png'

const About = () => {
    return (
        <div>
            <div className=" px-6 py-10 mx-auto bg-fixed" style={{ backgroundImage: `url(${bgimage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='w-[90%] mx-auto'>
                <h2 className='text-white text-center lg:text-3xl font-semibold'>ABOUT US</h2>
                <p className='text-white my-4 font-semibold text-center text-lg'>We specialize in ecommerce website design projects that combines of strategy and cutting-edge technology into businesses, hence enabling huge cost cuttings in your daily expenses.</p>
                </div>
                <div className="items-start lg:flex bg-white p-10">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-[12px] font-semibold text-gray-800 dark:text-white lg:text-xl">What we are <br />  <span className="text-[#2b0a3d] ">about</span></h1>
                            <p className="mt-3 mb-3 text-gray-600 dark:text-gray-400">we blend creativity and expertise to craft software solutions and strategic guidance that empower businesses. With a passion for innovation, our team collaborates closely to translate ideas into reality, driving success for clients worldwide.</p>
                        </div>
                        
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-[12px] font-semibold text-gray-800 dark:text-white lg:text-xl">Why select us and not some other firm offering you with the same set of services?</h1>
                            <p className="mt-3 mb-3 text-gray-600 dark:text-gray-400">we blend creativity and expertise to craft software solutions and strategic guidance that empower businesses. With a passion for innovation, our team collaborates closely to translate ideas into reality, driving success for clients worldwide.</p>
                            <ul className='list-disc pl-[20px]'>
                                <li>Encoders offers you much more than a product or a service. We help you with your business development and growth, and plan towards enhancing your business efficiency with IT and Systems.</li>
                                <li>We will not start with a project until we are absolutely clear about your requirements and whether the projected results are what you are actually after.</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                        <ul className='list-disc pl-[20px]'>
                                <li>Our website design services are managed by a team of highly skilled and experienced professionals who are more than mere coders and designers</li>
                                <li>Since we are a Website Development Company in India, our services are quite reasonably priced even though the quality is never compromised.</li>
                                <li>We ensure that we are always up to date with technology and keep a close watch on the oncoming days and the expected changes in the IT industry to be seen. This allows us to come up with the latest and the most efficient systems which will let you stay well ahead of your competitors</li>
                                <li>We will offer you with every single possible option to suit your requirements and your budget while ensuring that the offer will show you the desired results in the end</li>
                            </ul>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;