import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import NewUser from "./Pages/NewUser/NewUser";
import NotFound from "./Pages/NotFound/NotFound";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import User from "./Pages/User/User";
import UserList from "./Pages/UserList/UserList";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  const handelToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar isToggle={isToggle} handelToggle={handelToggle} />
        <div className={`layout ${isToggle ? "layout-toggle" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
