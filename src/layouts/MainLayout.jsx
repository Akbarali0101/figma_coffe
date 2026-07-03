import { Outlet } from "react-router-dom";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";


import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Modal from "../components/ui/modal/Modal";

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