
import OnSocial from '../HomePages/OnSocial/OnSocial';
import StickySocialIcon from '../StickySocialIcon/StickySocialIcon';
import './AboutUspage.css'
const AboutUspage = () => {
    return (
        <div>
            <StickySocialIcon></StickySocialIcon>
            <div style={{ backgroundImage: `url('https://img.freepik.com/free-vector/black-wallpaper-with-motion-lines-background_1017-30151.jpg?auto=format&h=200')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-[90%] mx-auto py-20">
                    <h1 className="uppercase text-4xl text-center text-white">WHY CHOOSE fingertip AS YOUR MOBILE APPS, ECOMMERCE, WEBSITE DESIGN AND DEVELOPMENT COMPANY ?</h1>
                    <p className="text-center text-white my-4">We are a professional web services provider focused on conceiving, developing and delivering tailor made Internet solutions at a reasonable and affordable cost.</p>
                </div>
            </div>



            <div className="my-20 w-[90%] mx-auto bg-[white] shadow-xl lg:pl-8 lg:pr-0 py-4 lg:flex px-4">
                <div>
                    <h3 className="text-2xl font-semibold">Fingertip designs, develops and supports customer-focused Internet solutions</h3>
                    <p className="text-justify mt-4">We specialize in projects that combines of strategy and cutting-edge technology into businesses, hence enabling huge cost cuttings in your daily web expenses. Integrity in business, recognition as experts, quality control, and dynamic customer relations are the distinguishing variables which ensure our ongoing success and that of our customers. We share a mark with our customers to generate the maximum return on investment within the shortest possible span. As a web solutions provider, we help our clients bring the right combination of strategy, technology, experience and creativity to every aspect of their Web-based projects. about us Our development team represents one of the leading resources for innovative and sophisticated web-based solutions accompanied with full range of custom, interactive, web development software and tools along with professional Internet strategies.</p>
                </div>
                <img src='https://cdn.pixabay.com/photo/2016/03/11/08/02/usa-1249880_640.jpg' className='lg:w-[300px]' alt="" />
            </div>



            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">What makes us what we are</h1>


                    <div className="p-4 my-4 space-y-3  shadow-lg hover:shadow-2xl dark:border-black rounded-xl">
                        <span className="inline-block text-black dark:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>
                        <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">THE RIGHT COMBINATION OF STRATEGY AND TECHNOLOGY</h1>
                        <p className="text-gray-500 dark:text-gray-300 text-[12px]">
                            The linkage of business strategy and technology plays an important role in firms' success. Today's trade spends heavily on e-business solutions and web based applications in order to promote and sell products, provide customer service & management, and consultation with business partners on the web. We at Encoders bring the right combination of strategy and cutting-edge technology through our experience and innovations.
                        </p>
                    </div>

                    <div className="p-4 space-y-3  shadow-lg hover:shadow-2xl dark:border-black rounded-xl">
                        <span className="inline-block text-black dark:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8' x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M 32.214844 2.0625 L 27.855469 3.7753906 L 28.617188 7.5898438 C 28.320231 7.8892397 28.002463 8.2286969 27.666016 8.5976562 L 23.910156 7.7382812 L 22.052734 12.070312 L 25.306641 14.238281 C 25.275891 14.736921 25.276911 15.238059 25.306641 15.736328 L 21.962891 17.785156 L 23.675781 22.144531 L 27.488281 21.382812 C 27.798956 21.750529 28.138774 22.089048 28.505859 22.400391 L 27.638672 26.191406 L 31.970703 28.046875 L 34.140625 24.792969 C 34.638586 24.823599 35.139099 24.822659 35.636719 24.792969 L 37.685547 28.136719 L 42.052734 26.421875 L 41.185547 22.308594 C 41.549034 22.00117 41.883047 21.665337 42.191406 21.302734 L 46.083984 22.277344 L 46.419922 21.494141 L 47.958984 17.898438 L 44.59375 15.835938 C 44.62297 15.346113 44.62297 14.853105 44.59375 14.363281 L 47.9375 12.314453 L 46.21875 7.9375 L 42.302734 8.8085938 C 41.994383 8.4447135 41.658646 8.1092982 41.294922 7.8007812 L 42.160156 4.0097656 L 37.810547 2.1445312 L 35.742188 5.4101562 C 35.279707 5.3645942 34.78331 5.3833909 34.271484 5.4199219 L 32.214844 2.0625 z M 31.384766 4.5371094 L 33.220703 7.53125 L 33.916016 7.3769531 C 34.624606 7.2194885 35.281373 7.2936332 36.189453 7.3945312 L 36.810547 7.4628906 L 38.589844 4.6542969 L 39.839844 5.1914062 L 39.076172 8.5273438 L 39.619141 8.9140625 C 40.231169 9.3512259 40.748383 9.8684396 41.185547 10.480469 L 41.570312 11.019531 L 44.982422 10.261719 L 45.462891 11.486328 L 42.535156 13.279297 L 42.605469 13.910156 C 42.698289 14.745513 42.698289 15.453706 42.605469 16.289062 L 42.535156 16.919922 L 45.439453 18.701172 L 44.916016 19.921875 L 41.482422 19.064453 L 41.085938 19.619141 C 40.648773 20.231169 40.13156 20.748383 39.519531 21.185547 L 38.986328 21.566406 L 39.748047 25.177734 L 38.513672 25.662109 L 36.720703 22.736328 L 36.089844 22.806641 C 35.254487 22.899461 34.546295 22.899461 33.710938 22.806641 L 33.105469 22.738281 L 31.228516 25.552734 L 29.960938 25.009766 L 30.722656 21.673828 L 30.181641 21.287109 C 29.569612 20.849946 29.050445 20.330779 28.613281 19.71875 L 28.238281 19.193359 L 24.923828 19.855469 L 24.4375 18.615234 L 27.363281 16.820312 L 27.292969 16.189453 C 27.200149 15.354096 27.200149 14.645904 27.292969 13.810547 L 27.361328 13.205078 L 24.546875 11.330078 L 25.089844 10.060547 L 28.365234 10.808594 L 28.759766 10.351562 C 29.329137 9.6872962 29.90625 9.1074219 30.40625 8.6074219 L 30.785156 8.2285156 L 30.144531 5.0253906 L 31.384766 4.5371094 z M 35 10 C 32.254545 10 30 12.254545 30 15 C 30 17.745455 32.254545 20 35 20 C 37.745455 20 40 17.745455 40 15 C 40 12.254545 37.745455 10 35 10 z M 35 12 C 36.654545 12 38 13.345455 38 15 C 38 16.654545 36.654545 18 35 18 C 33.345455 18 32 16.654545 32 15 C 32 13.345455 33.345455 12 35 12 z M 13.544922 20 L 12.896484 24.113281 C 12.355405 24.287471 11.836518 24.503931 11.339844 24.769531 L 7.8945312 22.292969 L 4.4042969 25.78125 L 6.7734375 29.224609 C 6.5059907 29.760781 6.273054 30.290202 6.09375 30.814453 L 2 31.568359 L 2 36.431641 L 6.1074219 37.189453 C 6.2812998 37.733147 6.4993108 38.25289 6.765625 38.751953 L 4.2832031 42.097656 L 7.78125 45.595703 L 11.224609 43.226562 C 11.755373 43.491312 12.279517 43.720506 12.798828 43.898438 L 13.445312 48 L 18.332031 48 L 19.089844 43.892578 C 19.635993 43.717816 20.159109 43.498408 20.660156 43.230469 L 24.105469 45.707031 L 27.607422 42.207031 L 25.132812 38.761719 C 25.396155 38.231419 25.627269 37.70796 25.804688 37.189453 L 30 36.435547 L 30 35.599609 L 30 31.542969 L 25.785156 30.894531 C 25.611067 30.354323 25.396058 29.835766 25.130859 29.339844 L 27.597656 25.908203 L 24.121094 22.28125 L 20.662109 24.767578 C 20.136177 24.506371 19.616086 24.27788 19.101562 24.101562 L 18.455078 20 L 13.544922 20 z M 15.253906 22 L 16.746094 22 L 17.306641 25.556641 L 17.882812 25.748047 C 18.782813 26.048047 19.602924 26.331417 20.269531 26.748047 L 20.839844 27.103516 L 23.878906 24.917969 L 25.001953 26.091797 L 22.796875 29.160156 L 23.152344 29.730469 C 23.600733 30.447892 23.953672 31.255393 24.123047 32.017578 L 24.271484 32.683594 L 28 33.257812 L 28 34.763672 L 24.339844 35.419922 L 24.150391 35.984375 C 23.850391 36.884375 23.568973 37.702534 23.152344 38.369141 L 22.796875 38.939453 L 24.992188 41.994141 L 23.894531 43.091797 L 20.839844 40.896484 L 20.269531 41.251953 C 19.552108 41.700343 18.744607 42.055235 17.982422 42.224609 L 17.335938 42.367188 L 16.667969 46 L 15.154297 46 L 14.59375 42.443359 L 14.015625 42.251953 C 13.115625 41.951953 12.297466 41.668583 11.630859 41.251953 L 11.074219 40.904297 L 8.0195312 43.003906 L 6.9179688 41.902344 L 9.109375 38.947266 L 8.7480469 38.369141 C 8.2996573 37.651717 7.9447651 36.84617 7.7753906 36.083984 L 7.6328125 35.4375 L 4 34.767578 L 4 33.232422 L 7.5625 32.576172 L 7.7480469 32.015625 C 8.0480469 31.115625 8.3314175 30.297466 8.7480469 29.630859 L 9.0957031 29.074219 L 6.9960938 26.019531 L 8.1054688 24.908203 L 11.160156 27.103516 L 11.730469 26.748047 C 12.447892 26.299657 13.255393 25.944765 14.017578 25.775391 L 14.681641 25.628906 L 15.253906 22 z M 16 29 C 14.416667 29 13.101892 29.629756 12.251953 30.585938 C 11.402014 31.542119 11 32.777778 11 34 C 11 35.222222 11.402014 36.457881 12.251953 37.414062 C 13.101892 38.370244 14.416667 39 16 39 C 17.583333 39 18.898108 38.370244 19.748047 37.414062 C 20.597986 36.457881 21 35.222222 21 34 C 21 32.777778 20.597986 31.542119 19.748047 30.585938 C 18.898108 29.629756 17.583333 29 16 29 z M 16 31 C 17.083333 31 17.768559 31.370244 18.251953 31.914062 C 18.735347 32.457881 19 33.222222 19 34 C 19 34.777778 18.735347 35.542119 18.251953 36.085938 C 17.768559 36.629756 17.083333 37 16 37 C 14.916667 37 14.231441 36.629756 13.748047 36.085938 C 13.264653 35.542119 13 34.777778 13 34 C 13 33.222222 13.264653 32.457881 13.748047 31.914062 C 14.231441 31.370244 14.916667 31 16 31 z"></path>
                            </svg>
                        </span>
                        <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Creative Designers and Developers</h1>
                        <p className="text-gray-500 dark:text-gray-300 text-[12px]">
                            We have the leading resources for innovative and sophisticated web-based solutions. We provide our staff with world-class working environment to take up the challenges that your bussiness faces and work out solutions for you.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">



                        <div className="p-4 space-y-3  shadow-lg hover:shadow-2xl dark:border-black rounded-xl">
                            <span className="inline-block text-black dark:text-black">
                                <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                                    <g clipPath="url(#clip0)"><path d="M26.599 4.339a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM7.151 25.661a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM23.486 13.163a8.636 8.636 0 00-1.19-2.873l1.123-1.123-2.592-2.59L19.705 7.7a8.636 8.636 0 00-2.873-1.19V4.921h-3.664v1.586a8.634 8.634 0 00-2.873 1.19l-1.122-1.12-2.592 2.589 1.123 1.123a8.636 8.636 0 00-1.19 2.873H4.922l-.002 3.663h1.592A8.626 8.626 0 007.704 19.7l-1.127 1.127 2.59 2.591 1.128-1.127a8.623 8.623 0 002.873 1.19v1.597h3.664v-1.597a8.628 8.628 0 002.873-1.19l1.128 1.128 2.59-2.592-1.127-1.127a8.627 8.627 0 001.19-2.873h1.593v-3.664h-1.593zM15 19.256a4.255 4.255 0 110-8.511 4.255 4.255 0 010 8.51z" fill="#4299E1" /><path d="M5.276 23.2c-.42 0-.823.105-1.182.302A13.853 13.853 0 011.172 15C1.172 7.375 7.375 1.172 15 1.172c.927 0 1.854.092 2.754.274a.586.586 0 00.232-1.149A15.111 15.111 0 0015 0C10.993 0 7.226 1.56 4.393 4.393A14.902 14.902 0 000 15c0 3.37 1.144 6.66 3.228 9.296-.268.4-.413.872-.413 1.365 0 .657.257 1.275.721 1.74a2.444 2.444 0 001.74.721c.658 0 1.276-.256 1.74-.721.465-.465.721-1.083.721-1.74s-.256-1.276-.72-1.74a2.445 2.445 0 00-1.74-.72zm.912 3.373a1.28 1.28 0 01-.912.377 1.28 1.28 0 01-.911-.377 1.28 1.28 0 01-.378-.912c0-.344.134-.668.378-.912a1.28 1.28 0 01.911-.377c.345 0 .668.134.912.378.243.243.377.567.377.911 0 .344-.134.668-.377.912zM26.772 5.703a2.465 2.465 0 00-.308-3.104 2.446 2.446 0 00-1.74-.721c-.658 0-1.276.256-1.74.72a2.445 2.445 0 00-.721 1.74c0 .658.256 1.276.72 1.741.465.465 1.083.72 1.74.72.42 0 .824-.104 1.183-.3A13.854 13.854 0 0128.828 15c0 7.625-6.203 13.828-13.828 13.828-.918 0-1.836-.09-2.728-.269a.586.586 0 00-.23 1.15c.968.193 1.963.291 2.958.291 4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0030 15c0-3.37-1.145-6.66-3.228-9.297zm-2.96-.452a1.28 1.28 0 01-.377-.912c0-.344.134-.668.377-.911a1.28 1.28 0 01.912-.378 1.29 1.29 0 010 2.578 1.28 1.28 0 01-.912-.377z" fill="#2D3748" /><path d="M12.582 25.078c0 .324.263.586.586.586h3.664a.586.586 0 00.586-.586v-1.136a9.179 9.179 0 002.199-.911l.802.802a.586.586 0 00.829 0l2.59-2.592a.586.586 0 000-.828l-.802-.802a9.169 9.169 0 00.911-2.199h1.132a.586.586 0 00.586-.585v-3.664a.586.586 0 00-.586-.586h-1.132a9.17 9.17 0 00-.911-2.199l.797-.797a.587.587 0 000-.829l-2.592-2.59a.586.586 0 00-.829 0l-.795.797a9.177 9.177 0 00-2.2-.912V4.922a.586.586 0 00-.585-.586h-3.664a.586.586 0 00-.586.586v1.126a9.169 9.169 0 00-2.199.91l-.796-.795a.586.586 0 00-.828 0l-2.592 2.59a.585.585 0 000 .828l.797.797a9.173 9.173 0 00-.911 2.199h-1.13a.586.586 0 00-.586.585l-.002 3.664a.585.585 0 00.586.586h1.132c.207.77.512 1.507.911 2.2l-.801.8a.586.586 0 000 .83l2.59 2.59a.586.586 0 00.829 0l.801-.801a9.185 9.185 0 002.2.911v1.136zm-1.97-3.28a.586.586 0 00-.732.078l-.713.714-1.761-1.763.712-.713a.586.586 0 00.078-.732 8.02 8.02 0 01-1.11-2.679.586.586 0 00-.572-.462H5.507l.002-2.492h1.005a.586.586 0 00.572-.463 8.022 8.022 0 011.11-2.678.586.586 0 00-.078-.733l-.708-.708 1.763-1.761.707.707c.196.196.5.228.733.078a8.016 8.016 0 012.678-1.11.586.586 0 00.463-.573v-1h2.492v1c0 .277.193.515.463.573a8.024 8.024 0 012.678 1.11c.232.15.537.118.732-.078l.708-.707 1.762 1.761-.708.708a.586.586 0 00-.078.732 8.027 8.027 0 011.11 2.679c.058.27.297.463.573.463h1.007v2.492h-1.007a.586.586 0 00-.573.462 8.02 8.02 0 01-1.11 2.679.586.586 0 00.078.732l.713.713-1.761 1.762-.714-.713a.586.586 0 00-.732-.078 8.027 8.027 0 01-2.678 1.11.586.586 0 00-.463.573v1.011h-2.492v-1.01a.586.586 0 00-.463-.574 8.021 8.021 0 01-2.678-1.11z" fill="#2D3748" /><path d="M19.841 15A4.847 4.847 0 0015 10.158 4.847 4.847 0 0010.158 15 4.847 4.847 0 0015 19.841 4.847 4.847 0 0019.841 15zm-8.51 0A3.674 3.674 0 0115 11.33 3.674 3.674 0 0118.67 15 3.674 3.674 0 0115 18.67 3.674 3.674 0 0111.33 15z" fill="#2D3748" /><path d="M20.395 2.216a.59.59 0 00.415-.172.593.593 0 00.171-.415.59.59 0 00-.586-.586.589.589 0 00-.586.586.589.589 0 00.586.587zM9.63 27.794a.59.59 0 00-.586.586.59.59 0 00.586.586.59.59 0 00.586-.586.59.59 0 00-.586-.585z" fill="#4299E1" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h30v30H0z" /></clipPath></defs>
                                </svg>

                            </span>
                            <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">RESULT FOCUSED</h1>
                            <p className="text-gray-500 dark:text-gray-300 text-[12px]">
                                Being placed in India, we get the advantage of high quality resource at a very low cost. This enables us to provide you solutions at a very very affordable cost.
                            </p>
                        </div>


                        <div className="p-4 space-y-3  shadow-lg hover:shadow-2xl dark:border-black rounded-xl">
                            <span className="inline-block text-black dark:text-black">
                                <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                                    <path d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z" fill="#2D3748" /><path d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z" fill="#4299E1" /><path d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z" fill="#4299E1" />
                                </svg>

                            </span>
                            <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">REASONABLE & AFFORDABLE SOLUTIONS</h1>
                            <p className="text-gray-500 dark:text-gray-300 text-[12px]">
                                Being placed in India, we get the advantage of high quality resource at a very low cost. This enables us to provide you solutions at a very very affordable cost.
                            </p>
                        </div>


                        <div className="p-4 space-y-3  shadow-lg hover:shadow-2xl dark:border-black rounded-xl">
                            <span className="inline-block text-black dark:text-black">
                                <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                                    <path d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z" fill="#2D3748" /><path d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614 -0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z" fill="#2D3748" /><path d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z" fill="#4299E1" />
                                </svg>

                            </span>
                            <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">PREMIUM QUALITY SERVICE</h1>
                            <p className="text-gray-500 dark:text-gray-300 text-[12px]">
                                We ensure that only the best work with us. So that we can provide you with the premium quality service.
                            </p>
                        </div>

                        <div className="p-4 space-y-3  shadow-lg hover:shadow-2xl dark:border-black rounded-xl">
                            <span className="inline-block text-black dark:text-black">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </span>

                            </span>
                            <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">GUARANTEED AFTER SALE SUPPORT</h1>
                            <p className="text-gray-500 dark:text-gray-300 text-[12px]">
                                All our products and services comes with a 30 days Warranty. In addition to that we have a dedicated after sales support team to provide you support at all times.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='bg-white'>
            <OnSocial></OnSocial>
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


            <div className="bg-white">
                <div className="w-[90%] mx-auto">
                    <div className="py-10 lg:flex">
                        <img src="https://cdn.pixabay.com/photo/2021/08/15/05/24/team-6546796_1280.jpg" className="lg:w-[600px]" alt="" />
                        <div className="lg:w-[400px] lg:pl-4">
                            <form action="">
                                {/* name */}
                                <div className="my-4">
                                    <label htmlFor="name" className="block text-xs font-medium text-black-700">
                                        Name
                                    </label>
                                    <input type="text" id="name" className="mt-1 w-full py-2 rounded-[5px] border border-black shadow-sm sm:text-sm" />
                                </div>

                                {/* email */}
                                <div className="my-4">
                                    <label htmlFor="UserEmail" className="block text-xs font-medium text-black-700">
                                        Email
                                    </label>
                                    <input type="email" id="UserEmail" placeholder="john@rhcp.com" className="mt-1 w-full py-2 rounded-[5px] pl-4 border border-black shadow-sm sm:text-sm" />
                                </div>


                                {/* phone */}
                                <div className="my-4">
                                    <label htmlFor="name" className="block text-xs font-medium text-black-700">
                                        phone
                                    </label>
                                    <input type="text" id="name" className="mt-1 w-full py-2 rounded-[5px] border border-black shadow-sm sm:text-sm" />
                                </div>


                                {/* your idea */}
                                <div className="my-4">
                                    <label htmlFor="name" className="block text-xs font-medium text-black-700">
                                        Your Idea
                                    </label>
                                    <input type="text" id="name" className="mt-1 w-full py-2 rounded-[5px] border border-black shadow-sm sm:text-sm" />
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

export default AboutUspage;