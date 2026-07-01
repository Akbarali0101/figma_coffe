import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Modal from "../components/ui/modal/Modal";

function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* Faqat test uchun */}
      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      <Outlet />

      <Footer />

      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
}

export default MainLayout;