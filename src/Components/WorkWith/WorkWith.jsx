import wewrokwith from '../../assets/workwith/weWrokwith.png'
import  iso from '../../assets/workwith/iso_cerificate_img.png'
import  social2 from '../../assets/workwith/we-are-on-social2.png'


const WorkWith = () => {
    return (
        <div className='w-[90%] mx-auto lg:grid lg:grid-cols-3 gap-10 my-20'>
            <div className='my-10 lg:my-0'>
                <h2 className='text-xl mb-2 font-semibold'>TECHNOLOGIES & FRAMEWORK</h2>
                <p className='text-gray-600'>We want to lighten your workload. Minimizing app switching and cognitive lift to give you more time to focus. Completing the next step on your phone should be simple and easy.</p>
                <img src={wewrokwith} alt="" />
            </div>
            <div className='my-10 lg:my-0'>
                <h2 className='text-xl mb-2 font-semibold'>ISO CERTIFIED</h2>
                <p className='text-gray-600'>We are an ISO 27001:2022 & 9001:2015 Certified Mobile App Development Company that ensures top quality digital solution. We have highly capable team of IT professionals and the required enthusiasm to offer our clients the best possible outcome.</p>
                <img src={iso} alt="" />
            </div>
            <div className='my-10 lg:my-0'>
                <h2 className='text-xl mb-2 font-semibold'>WE ARE ON SOCIAL</h2>
                <p className='text-gray-600'>Like and Subscribe our Social Media page! Youll get the latest Encoders company news, updates and career opportunities.</p>
                <img src={social2} alt="" />
            </div>
        </div>
    );
};

export default WorkWith;