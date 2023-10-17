import React, { useReducer, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MyHeader from './components/MyHeader';
import Routing from './Routing';

import Home from './pages/Home';
import MyCarousel from './components/MyCarousel';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;

    }
    case "CREATE": {

      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {

      newState = state.filter((it) => it.id !== action.targetId);
      break;

    }
    case "EDIT": {

      newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it
      );
      break;

    }

    case "ADD_TO_CART": {
      newState = state.map(item =>
        item.id === action.item.id
          ? { ...item, addedToCart: true } // 해당 항목의 addedToCart를 true로 설정
          : item
      );
      break;
    }
    default:
      return state;

  }
  return newState;
};

export const VolunteerStateContext = React.createContext();
export const VolunteerDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    category: 1,
    content: "아동 특기.적성 프로그램 지도",
    date: 1698624000000,
    location: "상록보육원",
    detail: "작성하시오.작성하시오.작성하시오.작성하시오.작성하시오.작성하시오.작성하시오.",
    image: "/images/detail1.png",
    addedToCart: false,

  },
  {
    id: 2,
    category: 5,
    content: "두번째 봉사활동",
    date: 1697587200000,
    location: "가평유기동물보호소",
    detail: "작성하시오.작성하시오.작성하시오.작성하시오.작성하시오.작성하시오.작성하시오.",
    image: "/images/detail1.png",
    addedToCart: false,
  },
  {
    id: 3,
    category: 6,
    content: "동물서식지 감시활동",
    date: 1697760000000,
    location: "북한산 국립공원",
    detail: ">모집대상 : 국립공원 관리 후원 및 정기적 봉사활동 가능 기업∙ 단체<br/>>모집기간 : 상시모집<br/>>활동장소<br/>-전국 국립공원 주요 탐방로(자연관찰로, 특별보호구, 해변)<br/>-참여기업∙단체의 희망공원 후원규모, 봉사활동계획(인원, 활동횟수 등)에 따라 탐방로 배정<br/>>활동분야 : 탐방로 정비 자원보전∙복원∙모니터링 공원환경정화 지역사회협력 기타 공원관리업무<br/>>활동기간 : 매년 12월까지 (1년 단위)<br/>>참여문의 :국립공원공단 각 공원사무소 자원보전과",
    image: "/images/detail3.png",
    addedToCart: false,

  },
  {
    id: 4,
    category: 3,
    content: "재즈 패스티벌",
    date: 1698796800000,
    location: "자라섬",
    detail: "<br/>활동기간<br/>11월 1일(토) ~ 11월 3일(월) *아티스트케어의 경우 아티스트의 출, 입국 일정에 따라 상이함<br/><br/>모집기간<br/>10월 20일(금) ~ 10월 25일(일)<br/><br/>지원방법<br/>1) 문화품앗이 내 활동신청<br/>2) 자기소개서 메일 송부(파일첨부) volunteer@jarasumjazz.com<br/><br/>모집인원<br/>총 160명 (으뜸 12명, 버금 148명)<br/><br/>모집대상<br/>만 19세(2003년생) ~ 35세(87년생)이하 한국어 가능자 * 자라지기 활동 경험자 우선 선발<br/><br/>교육일정<br/>1차| 으뜸 자라지기 파트별 세부 교육 (8월 13일(토) 14:00) 장소: 온더써드 (서울 동대문구 왕산로 33)<br/> 2차| 전체 자라지기 이론교육 (8월 28일(일) 13:00~18:00) 장소: 서교스퀘어 (서울 마포구 양화로 72)3차| 전체 자라지기 교육 현장 교육 (9월 17일(토) 13:00~17:00) 장소: 음악역 1939 및 자라섬(경기도 가평군 가평읍 대곡리 174-3)<br/>4차| 전체 자라지기 파트별 교육 (9월30일 (금) 20:00~22:00) 장소: 두밀 연수원 (경기도 가평군 가평읍 태봉두밀로 388)<br/><br/>제공사항<br/>19회 자라섬재즈페스티벌 관람티켓 6매 (일자 별 2매)<br/>자원봉사 활동 인증서 – 문화품앗이 & 자원봉사포털 1365 *가입필수<br/>현장 활동기간 숙박 및 식사<br/>활동용품 (의복, 가방, 모자 등)<br/>페스티벌 프로그램 북 내 활동명 기재<br/><br/>유의사항<br/>유의사항: 문화품앗이 내 활동신청+자기소개서 별도 메일 제출까지 완료하시면 신청완료 메일이 발송 됩니다.<br/>**10월31일(일) 24:00 마감시간 이후 신청서는 접수되지 않습니다.<br/>",
    image: "/images/detail4.png",
    addedToCart: false,

  },
  {
    id: 5,
    category: 4,
    content: "방과 후 활동 보조",
    date: 1698710400000,
    location: "구룡초등학교",
    detail: "1.담당자 성명 : 동행담당 곽수진<br/>담당자 연락처(연락시주의사항및 연락가능시간) : 010-0000-0000<br/><br/>2.봉사활동세부내역<br/>진로관련 교육과 체육활동, 수학 학습 지도 부탁드립니다.<br/><br/>3. 봉사신청 참고사항<br/>북한 출생 학생과 남한 출생 학생입니다.<br/><br/>4. 온라인 봉사 선택 안내 : 전체 대면 봉사 , 혹은 사회적 거리두기 단계에 따라 온라인 봉사 병행 가능(사전협의 후 진행 예정).",
    image: "/images/detail5.png",
    addedToCart: false,
  },
  {
    id: 6,
    category: 6,
    content: "해변 쓰레기 수거활동",
    date: 1699488000000,
    location: "강릉 안인해변",
    detail: "활동내용<br/>– 09:00~09:30 해양환경 및 안전 교육, 활동안내<br/>– 09:30~11:30 해앙쓰레기 수거, 분류, 기록, 무게 측정<br/>– 11:30~12:00 활동 소감 나누기, 마무리<br/>(※ 악천후 시, 활동이 취소될 수 있습니다.)<br/>(※ 활동 전날, 최종 공지 문자(또는 전화)를 드리오니 확인하여 주십시오.)<br/><br/> 모집대상 <br/>남녀노소 누구나 가능(※ 단, 초등·중학생은 보호자와 동행해 주세요.)",
    image: "/images/detail6.png",
    addedToCart: false,
  },
  {
    id: 7,
    category: 2,
    content: "생활편의지원",
    date: 1700006400000,
    location: "성동구 케어요양원",
    detail: "활동내용<br/>-활동 보조 : 어르신 일상생활 활동보조 및 수발(수분섭취, 치아위생, 세면 등)<br/> -식사 보조 : 식사수발<br/> – 말벗 등 : 동화책 읽어드리기, 신문읽어드리기 등<br/> – 노력봉사 : 생활공간, 거실, 프로그램실 등 청소 및 분리수거, 시설주변 환경정화 등",
    image: "/images/detail7.png",
    addedToCart: false,
  }
]


const App = () => {

  const [data, dispatch] = useReducer(reducer, dummyData);
 


  const dataId = useRef(8);

  //create
  const onCreate = (date, content, category, location, detail, image) => {
    dispatch({
      type: "CREATE", data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        category,
        location,
        detail,
        image,
      },
    });
    dataId.current += 1;
  };

  //Remove
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }
  //Edit
  const onEdit = (targetId, date, content, category, location, detail, image) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        category,
        location,
        detail,
        image,
      },
    });
  };
  const addToCart = ({ id, category, content, date, location, addedToCart }) => {
    const item = { id, category, content, date, location, addedToCart };

    dispatch({ type: "ADD_TO_CART", item });
  }

  return (
    <div className='App'>


      <MyHeader />
      <VolunteerStateContext.Provider value={data}>
        <VolunteerDispatchContext.Provider
          value={{
            onCreate,
            onEdit,
            onRemove,
            addToCart,
          }

          }>
          <Routing />
        </VolunteerDispatchContext.Provider>
      </VolunteerStateContext.Provider>






    </div>
  );
}

export default App;
