import { Link } from "react-router-dom";
import StickySocialIcon from "../../StickySocialIcon/StickySocialIcon";


const ServicesMobileDevelopment = () => {
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
                <h1>Mobile App</h1>
                <div className="lg:flex">

                    <div className="lg:w-[250px] my-4">
                        <Link to='/service' className="bg-white block border border-gray-300 p-[5px] hover:bg-black hover:text-white">
                            Web design and Development
                        </Link>
                        <Link to='/service' className="bg-white border block border-gray-300 p-[5px] hover:bg-black hover:text-white">
                            Graphics
                        </Link>
                        <Link to='/service' className="bg-white border block border-gray-300 p-[5px] hover:bg-black hover:text-white">
                            Logo
                        </Link>
                    </div>

                    <div className="lg:w-[700px] lg:ml-8">
                        <div className="lg:flex  bg-white lg:pr-8 py-4 shadow-lg border-x border-black rounded-md">
                            <img className="lg:w-[300px] lg:h-[200px] mr-4" src="https://www.encoders.co.in/images/portfolio/apps/singtron-bnr.jpg" alt="" />
                            <div className="px-4 lg:px-0">
                                <h3 className="font-semibold text-xl my-4">ignotron India Pvt. Ltd.</h3>
                                <p className="text-[14px] text-justify">Signotron is an ISO 9001:2015 certified company. Equipped with a manufacturing facility of 50,000sq ft located at the heart of the Salt Lake Electronics Complex, Kolkata, with more than hundreds of thousands of products in the rolling stock of Indian railways.</p>
                            </div>
                        </div>

                        <div className="lg:flex my-10 bg-white lg:pr-8 py-4 shadow-lg border-x border-black rounded-md">
                            <img className="lg:w-[300px] lg:h-[200px] mr-4" src="https://www.encoders.co.in/images/portfolio/apps/medisync-app.jpg" alt="" />
                            <div className="px-4 lg:px-0">
                                <h3 className="font-semibold text-xl my-4">Medisync</h3>
                                <p className="text-[14px] text-justify">Empathy Medicare is proud to be associated with Chanditala Rural Hospital in Hooghly, a PPP with Government of West Bengal, for Pathology & Imaging with a move to provide essential health care services at rural & semi urban level.</p>
                            </div>
                        </div>

                        <div className="lg:flex my-10 bg-white lg:pr-8 py-4 shadow-lg border-x border-black rounded-md">
                            <img className="lg:w-[300px] lg:h-[200px] mr-4" src="https://www.encoders.co.in/images/portfolio/apps/click-to-book-app.png" alt="" />
                            <div className="px-4 lg:px-0">
                                <h3 className="font-semibold text-xl my-4">Vedant Poly Fabs</h3>
                                <p className="text-[14px] text-justify">EDANT POLY FABS PRIVATE LIMITED is leading Flexible Packaging Company, steadfast and dependable organization in the field of Packaging Printing. It is a manufacturer of finest type of flexible packaging items such as 3 Layer and 5 layer Multilayer LD Film, Shrink Film, Barrier Film, Rotogravure Printing, CI Flexo Printing, BOPP Roll on Labels, Printing laminates, Milk and Oil printed Rolls.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesMobileDevelopment;