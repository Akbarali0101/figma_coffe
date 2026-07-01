import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar"; // <-- Mana shu yo'l to'g'ri bo'lishi shart!
import Footer from "../components/common/Footer"; // <-- Mana shu ham

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;