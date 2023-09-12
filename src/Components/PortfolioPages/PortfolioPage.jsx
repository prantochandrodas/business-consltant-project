import { Link } from "react-router-dom";
import StickySocialIcon from "../StickySocialIcon/StickySocialIcon";
import ContactForm from "../HomePages/ContactFrom/ContactForm";
import img from '../../assets/Portfolio/new.png'
import './PortfolioPage.css'
const PortfolioPage = () => {
    return (
        <div>
            <StickySocialIcon></StickySocialIcon>
            <div style={{ backgroundImage: `url('https://img.freepik.com/free-vector/black-wallpaper-with-motion-lines-background_1017-30151.jpg?auto=format&h=200')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-[90%] mx-auto py-20">
                    <h1 className="uppercase text-4xl text-center text-white">WHY CHOOSE Fingertip AS YOUR MOBILE APPS, ECOMMERCE, WEBSITE DESIGN AND DEVELOPMENT COMPANY ?</h1>
                    <p className="text-center text-white my-4">We are a professional web services provider focused on conceiving, developing and delivering tailor made Internet solutions at a reasonable and affordable cost.</p>
                </div>
            </div>


            <div className="w-[90%] mx-auto my-10">
                <h1>Web Design & Development</h1>
                <div className="lg:flex">

                    <div className="lg:w-[250px] my-4">
                        <Link to='/portfolio/mobileapp' className="bg-white block border border-gray-300 p-[5px] hover:bg-black hover:text-white">
                            Mobile App
                        </Link>
                        <Link to='/portfolio' className="bg-white block border border-gray-300 p-[5px] hover:bg-black hover:text-white">
                            Web design and Development
                        </Link>
                        <Link to='/portfolio/logo' className="bg-white block border border-gray-300 p-[5px] hover:bg-black hover:text-white">
                            <Link>Logo</Link>
                        </Link>
                    </div>

                    {/* <div className="lg:w-[700px] lg:ml-8">
                        <div className="lg:flex relative  bg-white lg:pr-8 py-4 shadow-lg border-x border-black rounded-md"my-10>
                             <img className="lg:w-[300px] lg:h-[200px] mr-4" src="https://mobirise.com/assets52/images/template17.jpg" alt="" />
                            <img className="lg:w-[200px] lg:h-[200px] absolute top-40 left-[100px] mr-4" src="https://images-platform.99static.com//Gis_kL1ebagwJi0IQ6nSssHJE8I=/0x0:1920x1920/fit-in/500x500/99designs-contests-attachments/91/91838/attachment_91838594" alt="" />
                            <div className="px-4 lg:px-0">
                                <h3 className="font-semibold text-xl my-4">MediSync</h3>
                                <p className="text-[14px] text-justify">Medisync, India’s first App and Web application connecting the various nods of Healthcare & Medical Services. Medisync addressed the daily life common challenges and comes to a solution, which not only solve the issues, it will also help people to stay updated digitally.</p>
                            </div>
                        </div>

                        <div className="lg:flex my-10 bg-white lg:pr-8 py-4 shadow-lg border-x border-black rounded-md"my-10>
                            <img className="lg:w-[300px] lg:h-[200px] mr-4" src="https://www.encoders.co.in/images/portfolio/website/thumbs/empathy-site.jpg" alt="" />
                            <div className="px-4 lg:px-0">
                                <h3 className="font-semibold text-xl my-4">Empathy Medicare</h3>
                                <p className="text-[14px] text-justify">Empathy Medicare is proud to be associated with Chanditala Rural Hospital in Hooghly, a PPP with Government of West Bengal, for Pathology & Imaging with a move to provide essential health care services at rural & semi urban level.</p>
                            </div>
                        </div>

                        <div className="lg:flex my-10 bg-white lg:pr-8 py-4 shadow-lg border-x border-black rounded-md"my-10>
                            <img className="lg:w-[300px] lg:h-[200px] mr-4" src="https://www.encoders.co.in/images/portfolio/website/thumbs/vadant-site.jpg" alt="" />
                            <div className="px-4 lg:px-0">
                                <h3 className="font-semibold text-xl my-4">Vedant Poly Fabs</h3>
                                <p className="text-[14px] text-justify">EDANT POLY FABS PRIVATE LIMITED is leading Flexible Packaging Company, steadfast and dependable organization in the field of Packaging Printing. It is a manufacturer of finest type of flexible packaging items such as 3 Layer and 5 layer Multilayer LD Film, Shrink Film, Barrier Film, Rotogravure Printing, CI Flexo Printing, BOPP Roll on Labels, Printing laminates, Milk and Oil printed Rolls.</p>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* portfolio card */}

                <div>
                    <div className="bg-white lg:shadow-xl shadow-md rounded-md my-10">
                        <div className="mx-4 lg:mx-0 img lg:flex relative lg:mb-20  lg:pr-8 py-4 ">
                            <img className="lg:w-[300px] w-[50%] lg:h-[400px] h-[320px]  mr-4" src="https://mobirise.com/assets52/images/template17.jpg" alt="" />
                            <img className="lg:w-[300px] w-[55%] h-[300px] border-8 border-white lg:h-[380px] absolute top-[30px] left-[130px] lg:left-[210px] mr-4" src="https://images-platform.99static.com//Gis_kL1ebagwJi0IQ6nSssHJE8I=/0x0:1920x1920/fit-in/500x500/99designs-contests-attachments/91/91838/attachment_91838594" alt="" />
                            <div className="px-4 lg:px-0 lg:absolute lg:top-[20%] lg:left-[530px] lg:right-[20px] flex flex-col justify-center">
                                <h3 className="font-semibold text-xl my-4">MediSync</h3>
                                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-justify">Medisync, India’s first App and Web application connecting the various nods of Healthcare & Medical Services. Medisync addressed the daily life common challenges and comes to a solution, which not only solve the issues, it will also help people to stay updated digitally.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white lg:shadow-xl shadow-md rounded-md my-10">
                        <div className="mx-4 lg:mx-0 img lg:flex relative lg:mb-20  lg:pr-8 py-4 ">
                            <img className="lg:w-[300px] w-[50%] lg:h-[400px] h-[320px]  mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5g_46JcRZh3m5OfLI1io-TdxYonTdf38cV_bW0GRQ-I0SjkAAL1MxduTLq1DnxhEMWw&usqp=CAU" alt="" />
                            <img className="lg:w-[300px] w-[55%] h-[300px] border-8 border-white lg:h-[380px] absolute top-[30px] left-[130px] lg:left-[210px] mr-4" src="https://weblium.com/blog/wp-content/uploads/2019/05/imgonline-com-ua-Compressed-B8y1EYhpR0m1.jpg" alt="" />
                            <div className="px-4 lg:px-0 lg:absolute lg:top-[20%] lg:left-[530px] lg:right-[20px] flex flex-col justify-center">
                                <h3 className="font-semibold text-xl my-4">Empathy Medicare</h3>
                                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-justify">Medisync, India’s first App and Web application connecting the various nods of Healthcare & Medical Services. Medisync addressed the daily life common challenges and comes to a solution, which not only solve the issues, it will also help people to stay updated digitally.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white lg:shadow-xl shadow-md rounded-md my-10">
                        <div className="mx-4 lg:mx-0 img lg:flex relative lg:mb-20  lg:pr-8 py-4 ">
                            <img className="lg:w-[300px] w-[50%] lg:h-[400px] h-[320px]  mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBYxmPtVe1YdChatcXasInxdedV1b9TKo2PfAxQW68srqvm58Vz0-gj4SxM90vUkTHVc&usqp=CAU" alt="" />
                            <img className="lg:w-[300px] w-[55%] h-[300px] border-8 border-white lg:h-[380px] absolute top-[30px] left-[130px] lg:left-[210px] mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYtDijJ8qoeGVxD6fz2_4x8rnqJLHV6kroeBBI66Ujpa-sFE1a4H56xnVfkbTTdbtWb8&usqp=CAU" alt="" />
                            <div className="px-4 lg:px-0 lg:absolute lg:top-[20%] lg:left-[530px] lg:right-[20px] flex flex-col justify-center">
                                <h3 className="font-semibold text-xl my-4">MediSync</h3>
                                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-justify">Medisync, India’s first App and Web application connecting the various nods of Healthcare & Medical Services. Medisync addressed the daily life common challenges and comes to a solution, which not only solve the issues, it will also help people to stay updated digitally.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white lg:shadow-xl shadow-md rounded-md my-10">
                        <div className="mx-4 lg:mx-0 img lg:flex relative lg:mb-20  lg:pr-8 py-4 ">
                            <img className="lg:w-[300px] w-[50%] lg:h-[400px] h-[320px]  mr-4" src="https://www.psdexplorer.com/wp-content/uploads/2014/10/free-psd-flat-business-website-template.jpg" alt="" />
                            <img className="lg:w-[300px] w-[55%] h-[300px] border-8 border-white lg:h-[380px] absolute top-[30px] left-[130px] lg:left-[210px] mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrYLqT30Q473gCrCtxlaTsW2ikIXlQGqlwzEAngC2S8_Ky9QHeYQPueZJALW4r5nuFzQ&usqp=CAU" alt="" />
                            <div className="px-4 lg:px-0 lg:absolute lg:top-[20%] lg:left-[530px] lg:right-[20px] flex flex-col justify-center">
                                <h3 className="font-semibold text-xl my-4">MediSync</h3>
                                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-justify">Medisync, India’s first App and Web application connecting the various nods of Healthcare & Medical Services. Medisync addressed the daily life common challenges and comes to a solution, which not only solve the issues, it will also help people to stay updated digitally.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white lg:shadow-xl shadow-md rounded-md my-10">
                        <div className="mx-4 lg:mx-0 img lg:flex relative lg:mb-20  lg:pr-8 py-4 ">
                            <img className="lg:w-[300px] w-[50%] lg:h-[400px] h-[320px]  mr-4" src="https://mobirise.com/assets52/images/template17.jpg" alt="" />
                            <img className="lg:w-[300px] w-[55%] h-[300px] border-8 border-white lg:h-[380px] absolute top-[30px] left-[130px] lg:left-[210px] mr-4" src="https://images-platform.99static.com//Gis_kL1ebagwJi0IQ6nSssHJE8I=/0x0:1920x1920/fit-in/500x500/99designs-contests-attachments/91/91838/attachment_91838594" alt="" />
                            <div className="px-4 lg:px-0 lg:absolute lg:top-[20%] lg:left-[530px] lg:right-[20px] flex flex-col justify-center">
                                <h3 className="font-semibold text-xl my-4">MediSync</h3>
                                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-justify">Medisync, India’s first App and Web application connecting the various nods of Healthcare & Medical Services. Medisync addressed the daily life common challenges and comes to a solution, which not only solve the issues, it will also help people to stay updated digitally.</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="lg:flex my-10 bg-[white] px-8 py-4 shadow-lg">

                    <div>
                        <h1 className="font-semibold text-2xl mb-4">What Fingertip offers</h1>
                        <p className="text-justify inline-block"> Fingertip offers state of the art customer-focused Ecommerce Development, Website Design and Development Services to clients based in USA, UK, Australia, Canada, Singapore, India & all over the world. Customized Web Design and Development service, the right combination of strategy and technology, creative and quality work, guaranteed post sales support and reasonable pricing make us stand out of the crowd. Call Us - +91 8981700000 </p>
                    </div>
                    <img className="lg:w-[500px]" src="https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?w=2000" alt="" />
                </div>

            </div>


            <div style={{ backgroundImage: `url('https://img.freepik.com/free-vector/black-wallpaper-with-motion-lines-background_1017-30151.jpg?auto=format&h=200')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-[80%] py-10 mx-auto lg:flex items-center">
                    <div className="lg:w-[80%]">
                        <h1 className="uppercase text-xl  text-white">CONTACT US</h1>
                        <p className=" text-white my-4 text-[14px]">Thank you for your interest in Fingertip and our services. Please fill out the form below, or e-mail us at sales@encoders.co.in and we will get back to you promptly regarding your request.</p>
                    </div>
                    <button className="!py-[8px] !px-[15px] lg:h-[50px] bg-white text-black">Reach Us Now</button>
                </div>
            </div>


            <div className="bg-white" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="py-20 w-[90%] mx-auto opacity-100">
                    <div>
                        <h1 className="font-semibold text-2xl uppercase">YOU HAVE AN IDEA SHARE WITH US</h1>
                        <p>Thank you for your interest in Encoders and our services. Please fill out the form below, or e-mail us at sales@encoders.co.in and we will get back to you promptly regarding your request.</p>
                    </div>


                    <div className="my-10 lg:flex">
                        {/* <img src="https://cdn.pixabay.com/photo/2021/08/15/05/24/team-6546796_1280.jpg" className="lg:w-[600px]" alt="" /> */}
                        <div className="w-full">
                            <form action="">


                                <div className="lg:flex justify-between">
                                    <div>
                                        {/* name */}
                                        <div className="my-4">
                                            <label htmlFor="name" className="block text-xs font-medium text-black-700">
                                                Name
                                            </label>
                                            <input type="text" id="name" className="mt-1 lg:w-[500px] w-full py-2 rounded-[5px] border border-black shadow-sm sm:text-sm" />
                                        </div>

                                        {/* email */}
                                        <div className="my-4">
                                            <label htmlFor="UserEmail" className="block text-xs font-medium text-black-700">
                                                Email
                                            </label>
                                            <input type="email" id="UserEmail" placeholder="john@rhcp.com" className="mt-1 lg:w-[500px] w-full py-2 rounded-[5px] pl-4 border border-black shadow-sm sm:text-sm" />
                                        </div>


                                        {/* phone */}
                                        <div className="my-4">
                                            <label htmlFor="name" className="block text-xs font-medium text-black-700">
                                                phone
                                            </label>
                                            <input type="text" id="name" className="mt-1 lg:w-[500px] w-full py-2 rounded-[5px] border border-black shadow-sm sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <label className="block mb-2 text-sm  dark:text-black">Requirment Type</label>
                                            <select className="block lg:w-[500px] w-full px-5 py-3 mt-2  bg-white border border-black rounded-md my-10dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="" id="" >
                                                <option value="" className="text-black bg-white">Please Select Requirment Type</option>
                                                <option value="" className="text-black bg-white">Mobile Design</option>
                                                <option value="" className="text-black bg-white">Web Design</option>
                                                <option value="" className="text-black bg-white">Advance Level</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-sm  dark:text-black">Level</label>
                                            <select className="block lg:w-[500px] w-full px-5 py-3 mt-2  bg-white border border-black rounded-md my-10dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="" id="" >
                                                <option value="" className="text-black bg-white">Please Select Level of Requirment</option>
                                                <option value="" className="text-black bg-white">Entry Level</option>
                                                <option value="" className="text-black bg-white">Intermediate Level</option>
                                                <option value="" className="text-black bg-white">Advance Level</option>

                                            </select>

                                        </div>


                                        <div>
                                            <label className="block mb-2 text-sm  dark:text-black">Billing Model</label>
                                            <select className="block lg:w-[500px] w-full px-5 py-3 mt-2  bg-white border border-black rounded-md my-10dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="" id="" >
                                                <option value="" className="text-black bg-white">Please Select Billing Model</option>
                                                <option value="" className="text-black bg-white">Project Wise</option>
                                                <option value="" className="text-black bg-white">Full Time</option>
                                                <option value="" className="text-black bg-white">Part Time</option>
                                            </select>
                                        </div>


                                        <div>
                                            <label className="block mb-2 text-sm  dark:text-black">Brief Job Description</label>
                                            <input type="text" placeholder="Brief Job Description" className="block lg:w-[500px] w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-black rounded-md my-10dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                    </div>
                                </div>





                                <input type="submit" value='submit' className="pt-[8px] pb-[8px] px-[35px] m-[10px 0 0 0] bg-[#252525] text-[#fff] uppercase" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;