import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
// import Navbar from "../component/Navbar";
import NavbarLite from "../component/Archrive/NavbarLite";

const MainLayout = () => {
  return (
    <div className="bg-white dark:bg-[#030014] ">
      <div className="fixed w-full top-0 z-50">
        {/* <Navbar></Navbar> */}
        <NavbarLite></NavbarLite>
      </div>
      <div className="container mx-auto min-h-[620px] lg:min-h-[775px] pt-20 w-auto lg:w-[95%]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
