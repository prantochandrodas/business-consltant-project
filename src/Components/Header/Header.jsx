import Navbar from "../Navbar/Navbar";
import haderPhoto from '../../assets/ecommerce.png'
import bannerBg from '../../assets/bannerbg.png'


const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Navbar></Navbar>
            <div className="">
                <div className="relative w-[95%] mx-auto flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-20">
                    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    </div>
                    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                        <div className="mb-16 lg:my-4 lg:max-w-lg lg:pr-5">

                            <h2 className="mb-5 font-sans text-white text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                                Crafting Innovative Software Solutions and Strategic Business Insights for Success
                            </h2>
                            <p className="pr-5 text-white mb-5 text-base  md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                            <div className="flex items-center">
                                <a className="inline-block rounded border border-[#fffff] bg-[#ffffff] text-black px-8 py-2 text-sm font-medium hover:bg-transparent hover:text-black-600 focus:outline-none focus:ring active:text-indigo-500" href="/download">
                                    Get Started
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;