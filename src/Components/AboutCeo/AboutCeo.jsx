import photo from '../../assets/Ajay Agarwal.jpg'
import './AboutCeo.css'
const AboutCeo = () => {
    return (
        <div className='w-[90%] lg:w-full mx-auto'>
            <h2 className='capitalize font-semibold lg:text-2xl text-center my-20'>Meet The visionary of fingertips</h2>
            <div id='sty' className='w-[95%] mx-auto lg:flex justify-center items-center'>
            <div className="circle image-wrap small lg:w-[40%]">
                <img src='https://media.licdn.com/dms/image/C4E03AQHPA-9F5Tu3Bg/profile-displayphoto-shrink_400_400/0/1629260897364?e=1698883200&v=beta&t=snC6MBDDFTS7l1IVbanODH85mic1IEYyOvs174fqa3Y' />
            </div>
            <div className='lg:w-[60%] lg:ml-4'>
                <h3 className='font-bold'>Ajay Agarwal</h3>
                <p className='font-semibold'>Founder & Director</p>
                <p className='text-[14px] text-justify'>A technological visionary and dynamic implementer, I serve as the bedrock of  Fingertip, driving the continuous growth and evolution of the brand and its business in tandem with the ever-changing landscape of time and technology.
                    <br />
                    With an illustrious career spanning over twenty years, including a pivotal five-year tenure within the banking sector during my formative years, I have cultivated a deep-rooted appreciation for the significance of discipline and time management.
                    <br />
                    My aptitude as an attentive listener and my innate patience are key facets of my professional persona. My aspiration is to not only excel as an adept executor but to also transform into a distinguished business automation consultant, effecting meaningful change through the strategic implementation of automation solutions.</p>
            </div>
        </div>
        </div>
    );
};

export default AboutCeo;