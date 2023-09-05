import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import HeaderTop from "../../Components/HomePages/HeaderTop/HeaderTop";
import LayOutNavbar from "../../Components/LayOutNavbar/LayOutNavbar";
import Services from "../../Components/HomePages/Services/Services";
import WorkWith from "../../Components/WorkWith/WorkWith";
import OnSocial from "../../Components/HomePages/OnSocial/OnSocial";
import HireDeveloper from "../../Components/HireDeveloper/HireDeveloper";
import AboutCeo from "../../Components/HomePages/AboutCeo/AboutCeo";
import Technolory from "../../Components/Technology/Technolory";
import Methhodology from "../../Components/HomePages/Methhodology/Methhodology";
import Clients from "../../Components/Clients/Clients";
import ContactForm from "../../Components/HomePages/ContactFrom/ContactForm";


const PageLayout = () => {
    return (
        <div>
            <div className="sticky top-0 z-10">
                <HeaderTop></HeaderTop>
                <LayOutNavbar></LayOutNavbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PageLayout;