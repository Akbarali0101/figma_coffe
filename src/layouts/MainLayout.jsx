import { Outlet } from "react-router-dom";



import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Modal from "../components/ui/modal/Modal";

function MainLayout() {
 

  return (
    <div>
      <Navbar />

      

      <Outlet />

      <Footer />
      <Modal />
    

    </div>

  );
}

export default MainLayout;