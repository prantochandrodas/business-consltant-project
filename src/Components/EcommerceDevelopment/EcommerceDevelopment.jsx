import Slider from 'react-slick';
import './EcommerceDevelopment.css';

const EcommerceDevelopment = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots:true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
    };
    return (
        <div className='w-[90%] mx-auto lg:py-20 '>

            <div className='lg:flex my-10'>
                <div className='lg:pr-10'>
                    <h1 className='uppercase text-2xl font-semibold '>ECOMMERCE DEVELOPMENT</h1>
                    <p className="text-justify">We provide a robust & scalable ecommerce platform which adapts with your business processes & culture. We offer you all of the necessary design, development and search engine marketing services needed to be successful online portal business.</p>
                </div>
                <div className='lg:!w-[500px] md:!w-[90%] !w-[90%] mx-auto lg:mx-0 mt-10 lg:mt-0'>
                    <Slider {...settings}>
                        <div>
                            <img className='lg:!w-[350px] md:!w-[550px] !w-[180px]' src="https://www.encoders.co.in/images/portfolio/website/sabera_florist.jpg" alt="" />
                        </div>
                        <div>
                            <img className='lg:!w-[350px] md:!w-[550px] !w-[180px]' src="https://www.encoders.co.in/images/portfolio/website/veedaa.jpg" alt="" />
                        </div>
                        <div>
                            <img className='lg:!w-[350px] md:!w-[550px] !w-[180px]' src="https://www.encoders.co.in/images/portfolio/website/book_maniaz.jpg" alt="" />
                        </div>
                        <div>
                            <img className='lg:!w-[350px] md:!w-[550px] !w-[180px]' src="https://www.encoders.co.in/images/portfolio/website/puddles.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 md:grid-cols-2 md:grid md:gap-y-2 gap-y-5'>
                <div className='bg-[#fff] drop-shadow-xl my-10 lg:my-0 mx-2 box p-5'>
                    <h1 className='lg:text-lg font-semibold  text-center'>Ecommerce Website Design</h1>
                    <p className="text-justify">Increase online revenue with a professionally designed website that elevates the shopping experience for your customers. With a website designed for usability, you will start converting more visitors into loyal customers. We design every element of your website to match your unique branding and industry best practices.</p>
                </div>
                <div className='bg-[#fff] drop-shadow-xl my-10 lg:my-0 mx-2 box p-5'>
                    <h1 className='lg:text-lg font-semibold  text-center'>Ecommerce Webdevelopment</h1>
                    <p className="text-justify">Online retail websites are highly complex with multiple payment methods, shipping methods, tax codes, promotional discounts, etc. Eliminate performance anxiety and trust our expert team of developers that are certified in eCommerce development.</p>
                </div>
                <div className='bg-[#fff] drop-shadow-xl my-10 lg:my-0 mx-2 box p-5'>
                    <h1 className='lg:text-lg font-semibold  text-center'>Marketing Services</h1>
                    <p className="text-justify">Maximize your online potential with marketing solutions that increase brand awareness, engagement, and revenue. IWD offers: content writing, conversion rate optimization, SEO, PPC, email marketing, social media ads, and more. Learn more about our marketing solutions and how we take brands to the next level in online performance.</p>
                </div>
                <div className='bg-[#fff] drop-shadow-xl my-10 lg:my-0 mx-2 box p-5'>
                    <h1 className='lg:text-lg font-semibold  text-center'>Ecommerce Support</h1>
                    <p className="text-justify">With protective plans, rest assured knowing that a dedicated team of developers and business analyst are directly available for your website. From installing new features to website crashes, we are here to resolve your issues. Plans are structured on a monthly basis and require no long-term contracts.</p>
                </div>
            </div>
        </div>
    );
};

export default EcommerceDevelopment;