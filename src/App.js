import React, { useReducer, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MyHeader from './components/MyHeader';
import Routing from './Routing';
import { Carousel } from 'bootstrap';
import Home from './pages/Home';
import MyCarousel from './components/MyCarousel';

const reducer =(state, action) =>{
  let newState=[];
  switch (action.type){
    case "INIT":{
      return action.data;
    
    }
    case "CREATE" : {
     
      newState = [action.data,...state];
      break;
    }
    case "REMOVE" : {
     
      newState = state.filter((it) => it.id !== action.targetId);
      break;

    }
    case "EDIT" : {
     
      newState = state.map((it)=> it.id ===action.data.id ? {...action.data} : it
      );
      break;

    }
    default:
      return state;

  }
  return newState
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData =[
  {
    id :1,
    emotion :1,
    content:"첫번째 봉사활동",
    date : 1697163411272,

  },
  {
    id :2,
    emotion :5,
    content:"두두번째 봉사활동",
    date : 1697163411280,

  },
  {
    id :3,
    emotion :4,
    content:"세번째 봉사활동",
    date : 1697163411290,

  },
  {
    id :4,
    emotion :3,
    content:"네번째 봉사활동",
    date : 1697163411297,

  },
  {
    id :5,
    emotion :4,
    content:"다섯번째 봉사활동",
    date : 1697163411299,

  }
]


function App() {

const [data, dispatch] = useReducer(reducer,dummyData);
console.log(new Date().getTime());


const dataId =useRef(0);

//create
const onCreate =(date, content, emotion)=>{
  dispatch({type :"CREATE", data :{
    id : dataId.current,
    date :new Date(date).getTime(),
    content,
    emotion,
  },
  });
  dataId.current +=1;
};

//Remove
const onRemove =(targetId) =>{
  dispatch({type :"REMOVE", targetId});
}
//Edit
const onEdit = (targetId,date,content,emotion)=>{
  dispatch({
    type: "EDIT",
    data :{
      id :targetId,
      date :new Date(date).getTime(),
      content,
      emotion,
    },
  });
};

  return (
    <div className='App'>
      

      <MyHeader/>
      <DiaryStateContext.Provider value={data}> 
      <DiaryDispatchContext.Provider 
      value={{
        onCreate,
        onEdit,
        onRemove,
      }

      }>
      <Routing/>
      </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
      
      
      
     
    
   
    </div>
  );
}

export default App;
