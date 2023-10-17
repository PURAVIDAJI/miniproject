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
                headText={"현재 신청 내역"}
                leftChild={
                    <MyButton text={"<뒤로가기"} onClick={()=>navigate(-1)}/>
                }

            />
            <div className="cart_content_wrapper">
            <section className="cart_sidebar">

            <SideBar />
            </section>
            <section className="cart_clickList">
            <div>
                
                <ul>
                {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <div>
                                <strong>Date:</strong>{" "}
                                {new Date(item.date).toLocaleDateString()}
                            </div>
                            <br/>
                            <div>
                                <strong>Location:</strong> {item.location}
                            </div>
                            <div>
                                <strong>Content:</strong> {item.content}
                            </div>
                            <button className="cart_button">
                                        X
                                    </button>
                            
                        </li>
                    ))}
                </ul>
            </div>
            </section>
            </div>
        </div>

    );

};

export default Cart;