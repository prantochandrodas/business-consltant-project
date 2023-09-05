import { Link } from "react-router-dom";
import StickySocialIcon from "../../StickySocialIcon/StickySocialIcon";


const PortfolioPagelogo = () => {
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
                <h1>Logo</h1>
                <div className="lg:flex">

                    <div className="lg:w-[250px] my-4">
                        <Link to='/portfolio' className="bg-white block border border-gray-300 p-[5px] hover:bg-black hover:text-white">
                            Web design and Development
                        </Link>
                        <Link to='/portfolio' className="bg-white border block border-gray-300 p-[5px] hover:bg-black hover:text-white">
                            Mobile App
                        </Link>
                        <Link to='/portfolio/logo' className="bg-white border block border-gray-300 p-[5px] hover:bg-black hover:text-white">
                            Logo
                        </Link>
                    </div>

                    <div className="lg:w-[700px] lg:ml-8">
                        <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3 gap-5">
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/aladin_chirag_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/amrit_realty_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/assignments_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/bamindia_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/aladin_chirag_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/bedrock_global_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/caratfree_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/chalk_deal_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/crm_software_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/aladin_chirag_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/fast_growth_logo.png" alt="" />
                            </div>
                            <div>
                                <img className="lg:w-[188px] lg:h-[71px]" src="https://www.encoders.co.in/images/portfolio/logo/nextway_logo.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPagelogo;