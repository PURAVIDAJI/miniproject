import { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { VolunteerStateContext } from "../App";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { categoryList } from "../util/category";

const Detail = () => {
    
    const {id} =useParams();
   

    // 리스트를 받아오기
    const volunteerList = useContext(VolunteerStateContext);
    const navigate = useNavigate();
    const [data,setData] =useState();

    



    useEffect(()=>{
        if(volunteerList.length>=1){
            const targetVolunteer = volunteerList.find(
                (it) => parseInt(it.id) === parseInt(id)
        );
        
        

        if(targetVolunteer){
            //모집글 존재할 때
            setData(targetVolunteer);

        }else{
            //모집글 존재하지 않을 때
            alert("없는 페이지입니다.");
            navigate('/',{replace:true});
        }

        }
    },[id,volunteerList]);

    if(!data){
        return<div className="DetailPage">로딩중입니다...</div>;
    }else{

        const currentVolunteerData = categoryList.find(
            (it)=>parseInt(it.category_id)===parseInt(data.category));

        console.log(currentVolunteerData);
        //아이콘 이미지 불러오기 위함.

        const strDate = new Date(parseInt(data.date)).toLocaleDateString();
        //위치가 중요하다.데이터 받고,리턴 하기 전에 선언해야 함.



        return (
            <div className="DetailPage">
                <Header 
                headText={"상세페이지"}
                leftChild={
                    <MyButton text={"<뒤로가기"} onClick={()=>navigate(-1)}/>
                }
                rightChild={
                    <MyButton text={"수정하기"} onClick={() =>navigate(`/edit/${data.id}`)}/>
                }
                />
                <article>
                    <section>
                        <h4>봉사 카테고리</h4>
                        <div className={[
                            "category_img_wrapper",
                            `category_img_wrapper_${data.category}`,
                            ].join(" ")
                            }>
                            <img className="img" src={currentVolunteerData.category_img}/>
                            <div className="category_description">
                                {currentVolunteerData.category_description}

                            </div>            
                        </div>
                    </section>
                    <section>
                        <h4>봉사 일자</h4>
                        <div className="volunteer_date_wrapper">
                            <p>{strDate}</p>
                        </div>
                    </section>
                    <section>
                        <h4>봉사 제목</h4>
                        <div className="volunteer_con_wrapper">
                            <p>{data.content}</p>
                        </div>
                    </section>
                    <section>
                        <h4>봉사 장소</h4>
                        <div className="volunteer_loc_wrapper">
                            <p>{data.location}</p>
                        </div>
                    </section>
                </article>

            </div>
        );

    }

    
}

export default Detail;