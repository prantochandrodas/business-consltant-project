import Slider from "react-slick";
import './OnSocial.css'

const OnSocial = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: 'black !important' }}
                onClick={onClick}
            />
        );
    }


    var settings = {
        width: 0,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="!w-[80%] mx-auto">
                <h1 className="uppercase text-2xl font-semibold text-center lg:my-0 my-10">Finger<span className="text-red-500">tip</span> ON SOCIAL</h1>
                <Slider {...settings}>
                    <div className="lg:!w-[300px] !w-[280px] mb-5 ml-[20px] mx-auto mt-4 shadow-lg border rounded-2xl duration-300 hover:shadow-sm">
                        <img src="https://www.encoders.co.in/images/facebook/post2.jpg" loading="lazy" alt="" className="w-full h-48 rounded-t-md" />

                        <div className="pt-3 ml-4 mr-2 mb-3">
                            <h3 className="text-md text-gray-900 py-5 text-center">
                                Happy Holi
                            </h3>
                        </div>
                        <div className="flex justify-center py-4">
                            <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                                READ MORE
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="lg:!w-[300px] !w-[280px] mb-5 ml-[20px] mx-auto mt-4 shadow-lg border rounded-2xl duration-300 hover:shadow-sm">
                        <img src="https://www.encoders.co.in/images/facebook/post3.jpg" loading="lazy" alt="" className="w-full h-48 rounded-t-md" />

                        <div className="pt-3 ml-4 mr-2 mb-3">
                            <h3 className="text-md text-gray-900 py-5 text-center">
                                Internation Mother Language day
                            </h3>
                        </div>
                        <div className="flex justify-center py-4">
                            <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                                READ MORE
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>


                    <div className="lg:!w-[300px] !w-[280px] mb-5 ml-[20px] mx-auto mt-4 shadow-lg border rounded-2xl duration-300 hover:shadow-sm">
                        <img src="https://www.encoders.co.in/images/facebook/post4.jpg" loading="lazy" alt="" className="w-full h-48 rounded-t-md" />

                        <div className="pt-3 ml-4 mr-2 mb-3">
                            <h3 className="text-md text-gray-900 py-5 text-center">
                                Maha Shivaratri
                            </h3>
                        </div>
                        <div className="flex justify-center py-4">
                            <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                                READ MORE
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="lg:!w-[300px] !w-[280px] mb-5 ml-[20px] mx-auto mt-4 shadow-lg border rounded-2xl duration-300 hover:shadow-sm">
                        <img src="https://www.encoders.co.in/images/facebook/post5.jpg" loading="lazy" alt="" className="w-full h-48 rounded-t-md" />

                        <div className="pt-3 ml-4 mr-2 mb-3">
                            <h3 className="text-md text-gray-900 py-5 text-center">
                                Happy Republic Day
                            </h3>
                        </div>
                        <div className="flex justify-center py-4">
                            <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                                READ MORE
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Slider>

            </div>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-4 bg-white py-10 py-10 px-5 w-[90%] mx-auto">
                <img className="lg:w-[200px] w-[150px]" src="https://www.encoders.co.in/images/certificateion/encoISO.png" alt="" />
                <img className="lg:w-[200px] w-[150px]" src="https://www.encoders.co.in/images/certificateion/isocertified.jpg" alt="" />
                <img className="lg:w-[200px] w-[150px]" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3mvU74YWsWtOWrS5N1A5gdQJKSY_DF401A8AXmJqwtvtF1QA9" alt="" />
                <img className="lg:w-[200px] w-[150px]" src="https://www.encoders.co.in/images/certificateion/exp12yrs.jpg" alt="" />
            </div>
        </div>
    );
};

export default OnSocial;