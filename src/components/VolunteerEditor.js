import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import Header from './Header';
import MyButton from "./MyButton";
import CategoryItem from "./CategoryItem";
import { VolunteerDispatchContext } from "../App";
import { categoryList } from '../util/category.js';




const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
}

const VolunteerEditor = ({ isEdit, originData }) => {

    const locRef = useRef();
    const conRef = useRef();
    const detailRef = useRef();
    const imageInputRef = useRef();



    const [location, setLocation] = useState("");
    const [content, setContent] = useState("");
    const [detailCon, setDetailCon] = useState("");
    const [imageSrc, setImageSrc] = useState(null);

    const [category, setCategory] = useState(1);
    const [date, setDate] = useState(getStringDate(new Date()));

    const { onCreate, onEdit } = useContext(VolunteerDispatchContext);

    const handleClickCate = (category) => {
        setCategory(category);
    }

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (location.length < 1) {
            locRef.current.focus();
            return;
        } if (content.length < 1 || content.length > 20) {
            conRef.current.focus();
            return;
        }
        if (detailCon.length < 30) {
            detailRef.current.focus();
            return;
        }

        if (window.confirm(isEdit ? "글을 수정하시겠습니까?" : "새로운 봉사 모집글을 작성하시겠습니까?")) {
            if (!isEdit) {
                onCreate(date, content, category, location, detailCon,);
            } else {
                onEdit(originData.id, date, content, category, location, detailCon,);
            }
        }

        navigate('/', { replace: true });
        //replace:true 뒤로가기로 이페이지로 돌아오지 못하게 하는 것
    };

    useEffect(() => {
        if (isEdit) {
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setCategory(originData.category);
            setLocation(originData.location || "");
            setContent(originData.content || "");
            setDetailCon(originData.detail || "");
        }
        // 아무것도 안썼을 때를 대비해서 빈문자열로 초기화해서 
        //undefined가 안되도록 만들어야 함
    }, [isEdit, originData]);




    const goOut = () => {
        alert("작성 중인 글을 나가시겠습니까?");
        navigate(-1);
    };

    const onUpload = (e) => {

        const file = e.target.files?.[0];
        if(file){
        const reader = new FileReader();
        reader.readAsDataURL(file);

        //onloadend -> 파일 읽기 작업이 완료되면 실행될 함수를 설정하는 부분
        reader.onloadend = () => {
            setImageSrc(reader.result);
        };
    }

    };

    return (
        <div className="VolunteerEditor">
            <Header
                headText={isEdit ? '봉사글 수정하기' : '새 봉사글 작성하기'}
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
                    <h4> 이미지 업로드</h4>
                    <div className="image-upload-wrapper">
                        <div className="image-preview">
                            {imageSrc ? (
                                <img src={imageSrc} alt="Preview" />
                            ) : (
                                <img src="/images/upload.png" alt="Default" className="default-image" />
                            )}
                        </div>
                        <div className="upload-button">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={onUpload}
                                ref={imageInputRef}
                            />
                            <label onClick={() => imageInputRef.current.click()}>이미지 업로드</label>
                        </div>
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