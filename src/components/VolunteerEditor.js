import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";

import Header from './Header';
import MyButton from "./MyButton";
import CategoryItem from "./CategoryItem";
import { VolunteerDispatchContext } from "../App";


const categoryList = [
    {
        category_id: 1,
        category_img: "/images/category1.png",
        category_description: '보육원'
    },
    {
        category_id: 2,
        category_img: "/images/category2.png",
        category_description: '양로원'
    },
    {
        category_id: 3,
        category_img: "/images/category3.png",
        category_description: '예술봉사'
    },
    {
        category_id: 4,
        category_img: "/images/category4.png",
        category_description: '교육봉사'
    },
    {
        category_id: 5,
        category_img: "/images/category5.png",
        category_description: '동물봉사'
    },
    {
        category_id: 6,
        category_img: "/images/category6.png",
        category_description: '환경봉사'
    }
];

const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
}

const VolunteerEditor = () => {

    const locRef = useRef();
    const conRef = useRef();
    const detailRef = useRef();


    const [location, setLocation] = useState("");
    const [content, setContent] = useState("");
    const [detailCon, setDetailCon] = useState("");

    const [category, setCategory] = useState(1);
    const [date, setDate] = useState(getStringDate(new Date()));

    const { onCreate } = useContext(VolunteerDispatchContext);

    const handleClickCate = (category) => {
        setCategory(category);
    }

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (location.length < 1) {
            locRef.current.focus();
            return;
        }
        if (content.length < 1 || content.length > 20) {
            conRef.current.focus();
            return;
        }
        if (detailCon.length < 30) {
            detailRef.current.focus();
            return;
        }
        onCreate(date, content, category, location);
        navigate('/', { replace: true });
        //replace:true 이해안됨.
    };




    const goOut = () => {
        alert("작성 중인 글을 나가시겠습니까?");
        navigate(-1);
    }
    return (
        <div className="VolunteerEditior">
            <Header
                headText={'새 봉사글 작성하기'}
                leftChild={
                    <MyButton
                        text={"<뒤로가기"}
                        onClick={goOut} />
                }
            />
            <div>
                <section>
                    {/* 역할은 div와 똑같다 */}
                    <h4>봉사일은 언제인가요?</h4>

                    <div className="input_box">
                        <input
                            className='input_date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            type="date" />
                    </div>

                </section>
                <section>
                    <h4>봉사의 카테고리는 무엇인가요?</h4>
                    <div className="input_box category_list_wrapper">
                        {categoryList.map((it) => (
                            <CategoryItem
                                key={it.category_id}
                                {...it}
                                onClick={handleClickCate}
                                isSelected={it.category_id === category}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h4>봉사활동 장소는 어디인가요?</h4>
                    <div className="input_box location_area">
                        <textarea className="loc"
                            ref={locRef}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="예시) 양재 도서관"
                        />
                    </div>
                </section>
                <section>
                    <h4>봉사활동 내용을 간략하게 설명해주세요.</h4>
                    <div className="input_box content">
                        <textarea className="con"
                            ref={conRef}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="20자 이내로 작성해주세요."
                        />
                    </div>
                </section>
                <section>
                    <h4>봉사활동 내용에 대해 상세하게 설명해주세요.</h4>
                    <div className="input_box detail_content">

                        <textarea className="detail"
                            ref={detailRef}
                            value={detailCon}
                            onChange={(e) => setDetailCon(e.target.value)}
                            placeholder="30자 이상 작성해주세요."
                        />

                    </div>
                </section>
                <section>
                    <div className="control_box">
                        <MyButton text={"취소하기"} onClick={goOut} />
                        <MyButton
                            text={"작성완료"}
                            type={"positive"}
                            onClick={handleSubmit} />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default VolunteerEditor;