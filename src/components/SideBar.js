import{Link,Outlet, useLocation}from 'react-router-dom';


const SideBar = ()=>{

    

    return(
        <div className="mypage-container">
        <div className="sidebar">
        <ul>
          <li>
            <Link to="mypage">프로필</Link>
          </li>
          <li>
            <Link to="cart">현재 신청 내역</Link>
          </li>
          <li>
            <Link to="history">이전 신청 내역</Link>
          </li>
          <li>
            <Link to="settings">설정</Link>
          </li>
        </ul>
      </div>
     
      
    </div>


    );

}

export default SideBar;