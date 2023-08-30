
import { FaPhoneSquare,FaFileAlt } from "react-icons/fa";
const HeaderTop = () => {
    return (
        <div className="bg-[#47a4ad]">
            <div className="w-[90%] mx-auto py-[5px] lg:flex hidden lg:items-center lg:justify-between">
                <div className="flex items-center">
                  <div className="text-white mr-[4px]"><FaPhoneSquare/></div>
                  <p className="text-white text-[12px]">Careers: +91 6291 4979 79 / fingertips@gmail.com </p>
                </div>

                <div className="flex items-center">
                  <div className="text-white mr-[4px]"><FaPhoneSquare/></div>
                  <p className="text-white text-[12px]"> Sales: +91 9836106099 / fingertips@gmail.com </p>
                </div>

                <div className="flex items-center">
                  <div className="text-white mr-[4px]"><FaFileAlt/></div>
                  <p className="text-white text-[12px]">Request For Free Quote</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;