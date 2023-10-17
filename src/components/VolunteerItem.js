import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import { useContext } from "react";
import { VolunteerDispatchContext } from "../App";

const VolunteerItem = ({ id, category, content, date, location }) => {


    const { addToCart } = useContext(VolunteerDispatchContext);

    const navigate = useNavigate();


    const handleAddToCart=()=>{
        
        
    addToCart({id, category, content, date, location,addedToCart: true});
    
    navigate('/mypage/cart');
};

    
    const strDate = new Date(parseInt(date)).toLocaleDateString();

    const goDetail = () => {
        navigate(`/Detail/${id}`)
    };
  


    return <div className="VolunteerItem">


        <div
            onClick={goDetail}
            className={[
                "category_img_wrapper",
                `category_img_wrapper_${category}`].join(" ")}>

            <img src={`/images/category${category}.png`} />
        </div>
        <div onClick={goDetail} className="info_wrapper">
            <div className="volunteer_date">{strDate}</div>
            <div className="volunteer_title">{location}</div>
            <div className="volunteer_content_preview">{content.slice(0, 20)}</div>
        </div>
        <div className="btn_wrapper">
            <MyButton onClick={handleAddToCart} text={'신청하기'} type={'negative'} />
        </div>




    </div>;
};

export default VolunteerItem;