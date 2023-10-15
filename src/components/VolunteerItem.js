import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const VolunteerItem = ({ id, category, content, date, location }) => {

    const navigate = useNavigate();
    const strDate = new Date(parseInt(date)).toLocaleDateString();

    const goDetail = () => {
        navigate(`/Detail/${id}`)
    };

    //Edit 페이지로 이동
    // const goEdit = () =>{
    //     navigate(`/Edit/${id}`)
    // };   


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
            <MyButton text={'신청하기'} type={'negative'} />
        </div>




    </div>;
};

export default VolunteerItem;