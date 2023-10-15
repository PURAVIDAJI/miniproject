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
    default:
      return state;

  }
  return newState
};

export const VolunteerStateContext = React.createContext();
export const VolunteerDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    category: 1,
    content: "첫번째 봉사활동",
    date: 1697163411272,
    location: "상록보육원",

  },
  {
    id: 2,
    category: 5,
    content: "두번째 봉사활동",
    date: 1697163411280,
    location: "가평유기동물보호소",

  },
  {
    id: 3,
    category: 4,
    content: "세번째 봉사활동",
    date: 1697163411290,
    location: "종로구 평생교육센터",

  },
  {
    id: 4,
    category: 3,
    content: "네번째 봉사활동",
    date: 1697163411297,
    location: "노들섬",

  },
  {
    id: 5,
    category: 4,
    content: "방과 후 활동 보조 선생님",
    date: 1697163411299,
    location: "구룡초등학교",

  },
  {
    id: 6,
    category: 6,
    content: "강릉 안인해변 쓰레기 수거활동",
    date: 1697163411299,
    location: "강릉 안인해변",

  },
  {
    id: 7,
    category: 2,
    content: "급식배급 보조활동",
    date: 1697163411299,
    location: "성동구 노인요양센터",

  }
]


const App = () => {

  const [data, dispatch] = useReducer(reducer, dummyData);
  console.log(new Date().getTime());


  const dataId = useRef(0);

  //create
  const onCreate = (date, content, category, location) => {
    dispatch({
      type: "CREATE", data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        category,
        location,
      },
    });
    dataId.current += 1;
  };

  //Remove
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }
  //Edit
  const onEdit = (targetId, date, content, category, location) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        category,
        location,
      },
    });
  };

  return (
    <div className='App'>


      <MyHeader />
      <VolunteerStateContext.Provider value={data}>
        <VolunteerDispatchContext.Provider
          value={{
            onCreate,
            onEdit,
            onRemove,
          }

          }>
          <Routing />
        </VolunteerDispatchContext.Provider>
      </VolunteerStateContext.Provider>






    </div>
  );
}

export default App;
