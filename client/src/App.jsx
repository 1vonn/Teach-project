import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import GetInTouch from "./pages/getintouch/GetInTouch"
import AdminPage from "./pages/admin/AdminPage";
import AdminLogin from "./pages/adminlogin/AdminLogin";
import ServiceProvider from "./pages/service/ServiceProvider"
import Shop from "./pages/shop/Shop";
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/getintouch" element={<GetInTouch/>}/>
<Route path="/service" element={<ServiceProvider/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/admin" element={<AdminPage/>}/>
<Route path="/adminlogin" element={<AdminLogin/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
