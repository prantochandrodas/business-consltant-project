import About from "../About/About";
import AboutCeo from "../AboutCeo/AboutCeo";
import Clients from "../../Clients/Clients";
import ContactForm from "../ContactFrom/ContactForm";
import EcommerceDevelopment from "../EcommerceDevelopment/EcommerceDevelopment";
import Footer from "../../Footer/Footer";
import Header from "../../HomePages/Header/Header";
import HireDeveloper from "../../HireDeveloper/HireDeveloper";
import Methhodology from "../Methhodology/Methhodology";
import MobileDevelopment from "../../MobileDevelopment/MobileDevelopment";
import OnSocial from "../OnSocial/OnSocial";
import Services from "../Services/Services";
import StickySocialIcon from "../../StickySocialIcon/StickySocialIcon";
import Technolory from "../../Technology/Technolory";
import WorkWith from "../../WorkWith/WorkWith";

const Home = () => {
    return (
        <div>
            <StickySocialIcon></StickySocialIcon>
            <Header></Header>
            <MobileDevelopment></MobileDevelopment>
            <About></About>
            <EcommerceDevelopment></EcommerceDevelopment>
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
        </div>
    );
};

export default Home;