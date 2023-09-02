import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import HeaderTop from "../../Components/HeaderTop/HeaderTop";
import LayOutNavbar from "../../Components/LayOutNavbar/LayOutNavbar";
import Services from "../../Components/Services/Services";
import WorkWith from "../../Components/WorkWith/WorkWith";
import OnSocial from "../../Components/OnSocial/OnSocial";
import HireDeveloper from "../../Components/HireDeveloper/HireDeveloper";
import AboutCeo from "../../Components/AboutCeo/AboutCeo";
import Technolory from "../../Components/Technology/Technolory";
import Methhodology from "../../Components/Methhodology/Methhodology";
import Clients from "../../Components/Clients/Clients";
import ContactForm from "../../Components/ContactFrom/ContactForm";


const PageLayout = () => {
    return (
        <div>
            <div className="sticky top-0 z-10">
                <HeaderTop></HeaderTop>
                <LayOutNavbar></LayOutNavbar>
            </div>
            <Outlet></Outlet>
            
            <Services></Services>
            <WorkWith></WorkWith>
            <OnSocial></OnSocial>
            <HireDeveloper></HireDeveloper>
            <AboutCeo></AboutCeo>
            <Technolory></Technolory>
            <Methhodology></Methhodology>
            <Clients></Clients>
            <ContactForm></ContactForm>
            <Footer></Footer>
            <Footer></Footer>
        </div>
    );
};

export default PageLayout;