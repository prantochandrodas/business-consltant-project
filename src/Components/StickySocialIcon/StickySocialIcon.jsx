
import './StickySocialIcon.css'; // Import your CSS file for styling
import { FaPhoneAlt,FaWhatsapp,FaEnvelope } from "react-icons/fa";
const StickySocialIcon = () => {
    // Define the social media links
    const socialMediaLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com/' },
        { name: 'Twitter', url: 'https://twitter.com/' },
        { name: 'Instagram', url: 'https://www.instagram.com/' },
    ];

    return (
        <div className="sticky-social-icon-container">
            <a
                className="social-icon1 bg-[#59BFBE] text-white p-4"
                href='/'
                target="_blank"
                rel="noopener noreferrer"
            >
               <div className='fa'>
                <FaPhoneAlt></FaPhoneAlt>
               </div>
            </a>
            <a
                className="social-icon2 bg-[#25D366] text-white p-4"
                href='/'
                target="_blank"
                rel="noopener noreferrer"
            >
               <div className='fa'>
                <FaWhatsapp></FaWhatsapp>
               </div>
            </a>
            <a
                className="social-icon3 bg-[#DC4F42] text-white p-4"
                href='/'
                target="_blank"
                rel="noopener noreferrer"
            >
               <div className='fa'>
                <FaEnvelope></FaEnvelope>
               </div>
            </a>
        </div>
        
    );
};

export default StickySocialIcon;
