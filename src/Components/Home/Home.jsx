import About from "../About/About";
import AboutCeo from "../AboutCeo/AboutCeo";
import Clients from "../Clients/Clients";
import ContactForm from "../ContactFrom/ContactForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HireDeveloper from "../HireDeveloper/HireDeveloper";
import Methhodology from "../Methhodology/Methhodology";
import MobileDevelopment from "../MobileDevelopment/MobileDevelopment";
import OnSocial from "../OnSocial/OnSocial";
import Services from "../Services/Services";
import Technolory from "../Technology/Technolory";
import WorkWith from "../WorkWith/WorkWith";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <MobileDevelopment></MobileDevelopment>
            <About></About>
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