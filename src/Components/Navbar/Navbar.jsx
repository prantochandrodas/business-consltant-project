import { useState } from "react";
import logo from '../../assets/logo.png';


const Navbar = () => {
    const navigation = [
        { title: "Home", path: "/" },
        { title: "Services", path: "/" },
        { title: "About-Us", path: "/myOrder" },
        { title: "Portfolio", path: "/myOrder" },
        { title: "Our Clients", path: "/myOrder" },
        { title: "Contact Us", path: "/myOrder" },
    ]

    const [state, setState] = useState(false);
    return (
        <div>
            <nav className="top-0 z-30 w-[95%] mx-auto nav-border md:border-0 md:static">
                <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-2 md:block">
                        <div className='flex items-center justify-between'>
                            <a href="javascript:void(0)">
                                <img
                                    src={logo}
                                    width={280}
                                    height={50}
                                    alt="Float UI logo"
                                />
                            </a>
                            <fieldset className="w-full space-y-1 text-black md:mx-2 mx-2 md:mt-0">
                                <label htmlFor="Search" className="hidden">Search</label>

                            </fieldset>
                        </div>
                        <div className="md:hidden">
                            <button className="text-color text-border outline-none p-2 rounded-md  focus:border"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="navtext-color justify-center items-center space-y-8 md:flex md:space-x-10 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="font-semibold  hover:text-indigo-600">
                                            <div onClick={() => setState(!state)}>
                                                {item.title}
                                            </div>
                                        </li>

                                    )
                                })
                            }


                        </ul>
                    </div>
                    {/* <div className={`md:inline-block ${state ? 'block' : 'hidden'}`} >
                        <a className="inline-block rounded border border-[#2b0a3d] bg-[#2b0a3d] px-8 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="/download">
                            Get Started
                        </a>

                    </div> */}
                </div>
            </nav>
          


        </div>
    );
};

export default Navbar;