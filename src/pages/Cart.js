import { useContext } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { VolunteerStateContext } from "../App";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const volunteerList = useContext(VolunteerStateContext);
    const cartItems = volunteerList.filter((item) => item.addedToCart);
    const navigate = useNavigate();


    return (

        <div className="MyPage">
            <Header
                headText={"마이 페이지"}
                leftChild={
                    <MyButton text={"<뒤로가기"} onClick={()=>navigate(-1)}/>
                }

            />

            <SideBar />
            <div>
                <h2>Cart Items</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>{item.location}</li>
                    ))}
                </ul>
            </div>




        </div>

    );

};

export default Cart;