import Slider from "react-slick";


const Clients = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 10000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        <div style={{backgroundImage:`url('https://www.encoders.co.in/images/client_bg.jpg')`}}>
            <div className="w-[80%] lg:w-[90%] mx-auto py-20">
            <Slider {...settings}>
                <div className="bg-white !w-[200px] !flex !justify-center items-center !h-[100px]">
                  <img className="w-[100px]" src="https://www.encoders.co.in/images/portfolio/client/vidyathri.png" alt="" />
                </div>
                <div className="bg-white !w-[200px] !flex !justify-center items-center !h-[100px]">
                  <img className="w-[100px]" src="https://www.encoders.co.in/images/portfolio/client/zehn.png" alt="" />
                </div>
                <div className="bg-white !w-[200px] !flex !justify-center items-center !h-[100px]">
                  <img className="w-[100px]" src="https://www.encoders.co.in/images/portfolio/client/rueda.png" alt="" />
                </div>
                <div className="bg-white !w-[200px] !flex !justify-center items-center !h-[100px]">
                  <img className="w-[100px]" src="https://www.encoders.co.in/images/portfolio/client/fikarrnot.png" alt="" />
                </div>
                <div className="bg-white !w-[200px] !flex !justify-center items-center !h-[100px]">
                  <img className="w-[100px]" src="https://www.encoders.co.in/images/portfolio/client/ms_fitness.png" alt="" />
                </div>
                <div className="bg-white !w-[200px] !flex !justify-center items-center !h-[100px]">
                  <img className="w-[100px]" src="https://www.encoders.co.in/images/portfolio/client/diyday.png" alt="" />
                </div>
                <div className="bg-white !w-[200px] !flex !justify-center items-center !h-[100px]">
                  <img className="w-[100px]" src="https://www.encoders.co.in/images/portfolio/client/cancerra.png" alt="" />
                </div>
                <div className="bg-white !w-[200px] !flex !justify-center items-center !h-[100px]">
                  <img className="w-[100px]" src="https://www.encoders.co.in/images/portfolio/logo/client42.png" alt="" />
                </div>
            </Slider>
        </div>
        </div>
    );
};

export default Clients;