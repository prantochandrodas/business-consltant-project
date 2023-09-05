import wewrokwith from '../../assets/workwith/weWrokwith.png'
import  iso from '../../assets/workwith/iso_cerificate_img.png'
import  social2 from '../../assets/workwith/we-are-on-social2.png'


const WorkWith = () => {
    return (
        <div className='w-[90%] mx-auto lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-10 my-10'>
            <div className='my-10 lg:my-0 bg-white flex flex-col justify-between p-4 border-x border-[red] rounded-xl'>
                <div>
                <h2 className='text-md mb-2 font-semibold text-center'>TECHNOLOGIES & FRAMEWORK</h2>
                <p className='text-gray-600 text-justify text-[14px]'>We want to lighten your workload. Minimizing app switching and cognitive lift to give you more time to focus. Completing the next step on your phone should be simple and easy.</p>
                </div>
                <img className='h-[200px] w-full' src={wewrokwith} alt="" />
            </div>
            <div className='my-10 lg:my-0 flex flex-col justify-between bg-white p-4 border-x border-[red] rounded-xl'>
                <div>
                <h2 className='text-md mb-2 font-semibold text-center'>ISO CERTIFIED</h2>
                <p className='text-gray-600 text-justify text-[14px]'>We are an ISO 27001:2022 & 9001:2015 Certified Mobile App Development Company that ensures top quality digital solution. We have highly capable team of IT professionals and the required enthusiasm to offer our clients the best possible outcome.</p>
                </div>
                <img className='h-[200px] w-full' src={iso} alt="" />
            </div>
            <div className='my-10 lg:my-0 flex flex-col justify-between bg-white p-4 border-x border-[red] rounded-xl'>
                <div>
                <h2 className='text-md mb-2 font-semibold text-center'>WE ARE ON SOCIAL</h2>
                <p className='text-gray-600 text-justify text-[14px]'>Like and Subscribe our Social Media page! Youll get the latest Encoders company news, updates and career opportunities.</p>
                </div>
                <img className='h-[200px] w-full ' src={social2} alt="" />
            </div>
        </div>
    );
};

export default WorkWith;