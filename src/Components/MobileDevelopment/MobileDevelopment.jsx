import img from '../../assets/touch-bundle-hero-new.png'

const MobileDevelopment = () => {
    return (
        <div className='lg:flex mt-20 w-[95%] mx-auto'>
            <img src={img} className='lg:w-[600px]' alt="" />
            <div>
                <h2 className='font-semibold text-2xl'>MOBILE APP DEVELOPMENT</h2>
                <p>
                    We provide wide range of enterprise mobile app development services including mobile UI design, smartphone solutions, custom application and many more.
                    <br /><br />
                    Considering these reasons, you must think about dealing with a reliable and efficient web development company who can provide you with the right mobile application development platformsfor your business. We at Encoders have a trained and certified team of mobile application development professionals for you to work with.
                    <br /><br />
                    Through our constant research we have understood the most important factors responsible for showing you success with your business mobile platform are:
                </p>
                <ul className='list-disc pl-[20px]'>
                    <li>Less resource requirements</li>
                    <li>Stability</li>
                    <li>Security</li>
                    <li>User friendliness</li>
                    <li>Quick and efficient applications</li>
                    
                </ul>
            </div>
        </div>
    );
};

export default MobileDevelopment;