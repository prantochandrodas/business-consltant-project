import { Outlet } from "react-router-dom";
import HeaderTop from "../Components/HomePages/HeaderTop/HeaderTop";


const Main = () => {
    return (
        <div>
             <HeaderTop></HeaderTop>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;