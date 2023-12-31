import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Introduce from "./pages/Introduce";
import LogIn from "./pages/LogIn";
import MyPage from "./pages/MyPage";
import Cart from "./pages/Cart";


const Routing = () => {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* path에 아무것도 없을 때는 Home페이지로 */}
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/mypage/cart" element = {<Cart/>}/>



        </Routes>
      </div>

    </BrowserRouter>

  )
};

export default Routing;