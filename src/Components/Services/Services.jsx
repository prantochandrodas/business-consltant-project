import app from '../../assets/apps.png'
import ecom from '../../assets/ecom.png'
import web from '../../assets/web_design.png'
import webdevelopment from '../../assets/web_development.png'
import laravel from '../../assets/laraval.png'
import angular from '../../assets/angular (1).png'
import sowft from '../../assets/software_development.png'
import i_marketing from '../../assets/i_marketing.png'
import gps from '../../assets/gpsloc.png'

const Services = () => {
    return (
        <div className='bg-[#efefef] lg:my-20'>
            <div className='w-[90%] mx-auto lg:grid grid-cols-3 gap-10 py-20'>
                <div>
                    <div className='flex items-center'>
                        <img src={app} alt="" className='w-[60px]' />
                        <h2 className='text-2xl font-semibold'>Mobile App  Development</h2>
                    </div>
                    <p><strong>Mobile App Development Services</strong>We provide wide range of enterprise  including mobile UI design, smartphone solutions, custom application and many more.</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={ecom} alt="" className='w-[60px]' />
                        <h2 className='text-2xl font-semibold'>eCommerce Development</h2>
                    </div>
                    <p>We provide a robust &amp; scalable <strong>Ecommerce Development Service</strong> which adapts with your business processes &amp; culture. We offer you all of the necessary design, development and search engine marketing services needed to be successful online portal business.</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={web} alt="" className='w-[60px]' />

                        <h2 className='text-2xl font-semibold'>Website Design</h2>
                    </div>
                    <p>We put ourselves in our customers shoes from first blush to final finish for his website design project. This allows us to design and build websites that integrate with your performance objectives and delivers results from day one. We provide full cistomized Mobile friendly <strong>Website Design Services</strong> </p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={webdevelopment} alt="" className='w-[60px]' />
                        <h2 className='text-2xl font-semibold'>Codeigniter Development</h2>
                    </div>
                    <p>
                        CodeIgniter is a robust PHP framework to create full-featured web portals Our Codeigniter Developer always help you to stay ahead of your competitors. We treasure a vast pool of talented and experienced codeigniter website developers, who by virtue of their skills develop attractive websites that entice and delight the intended audience.
                    </p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={laravel} alt="" className='w-[60px]' />
                        <h2 className='text-2xl font-semibold'>Laravel Development</h2>
                    </div>
                    <p>
                        Our Laravel developers have hands-on experience in Laravel Web Projects to create robust softwares. Laravel development is one of the most popular PHP framework. Fast development speed, Bundled Features, Inbuilt Features.
                    </p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={angular} alt="" className='w-[60px]' />
                        <h2 className='text-2xl font-semibold'>Angular.JS Development</h2>
                    </div>
                    <p>
                        Hire our Angular.JS web development experts to get web and mobile applications developed at affordable rates.
                        Using Angular.JS, develop web &amp; mobile app with clean &amp; easy coding standards and  create highly expressive web applications.
                    </p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={sowft} alt="" className='w-[60px]' />
                        <h2 className='text-2xl font-semibold'>Software Development</h2>
                    </div>
                    <p>We provide wide range of software applications development services including HRM, CRM, Billing Module, Logistics Module, Invoice systems and Custom Application and many more.</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={i_marketing} alt="" className='w-[60px]' />
                        <h2 className='text-2xl font-semibold'>Internet Marketing (SEO, SEM)</h2>
                    </div>
                    <p>Apart from web designing and the web development services, we also need to take a closer look at search engine optimization and marketing to take the full advantage of the latest consumer trends.</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={gps} alt="" className='w-[60px]' />
                        <h2 className='text-2xl font-semibold'>GPS &amp; Location Based Mobile App Development</h2>
                    </div>
                    <p>
                        We develop Customized GPS and Location Mobile Applications that based on the unique needs of your businesses.
                        The Location based app gives a competitive advantage to your business by tracking locations and implement various analytics.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;