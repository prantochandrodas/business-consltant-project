import { Link } from "react-router-dom";
import StickySocialIcon from "../../StickySocialIcon/StickySocialIcon";


const ServicesPage = () => {
    return (
        <div>
            <StickySocialIcon></StickySocialIcon>
            <div style={{ backgroundImage: `url('https://img.freepik.com/free-vector/black-wallpaper-with-motion-lines-background_1017-30151.jpg?auto=format&h=200')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-[90%] mx-auto py-20">
                    <h1 className="uppercase text-4xl text-center text-white">SOLUTIONS WE OFFER RANGE FROM CREATING CUSTOM WEBSITE DESIGNS TO DEVELOPING BUSINESS APPLICATIONSOF ANY COMPLEXITY.</h1>
                    <p className="text-center text-white my-4">We always keep our services up-to-date with the latest trends in the market, providing our customers with high-end-classand easily extensible products.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;