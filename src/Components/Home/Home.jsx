import About from "../About/About";
import AboutCeo from "../AboutCeo/AboutCeo";
import Header from "../Header/Header";
import HireDeveloper from "../HireDeveloper/HireDeveloper";
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
        </div>
    );
};

export default Home;