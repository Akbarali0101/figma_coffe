import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";


function MainLayout() {
 

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>

  );
}

export default MainLayout;