import { useState } from "react";
import "./Beat.css";
import Modal from "../modal/Modal";

const Beat = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="beat-container">
        <div className="summary-wrapper">
          <div className="summary-container">
            <p className="summary-label">ORDER SUMMARY</p>

            <p className="summary-text">
              "I drink my coffee as <span className="highlight">Filter</span>,
              with a <span className="highlight">Decaf</span> type of bean.
              <span className="highlight"> 250g</span> ground ala
              <span className="highlight"> Cafetière</span>, sent to me
              <span className="highlight"> Every Week</span>."
            </p>
          </div>

          <div className="button-container">
            <button
              className="create-plan-btn"
              onClick={() => setOpen(true)}
            >
              Create my plan!
            </button>
          </div>
        </div>
      </div>

      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
};

export default Beat;