import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";



const MyPage = () => {

    

    return (
        <div className="MyPage">
                <Header
                headText={"마이 페이지"}
                
                />

                <SideBar/>
        </div>




    );
};

export default MyPage;