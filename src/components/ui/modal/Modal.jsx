import "./modal.css";

function Modal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Order Summary</h2>
        </div>

        <div className="modal-body">
          <p className="summary">
            “I drink my coffee as <span>Filter</span>, with a{" "}
            <span>Decaf</span> type of bean. <span>250g</span> ground
            ala <span>Cafetiere</span>, sent to me <span>Every Week</span>.”
          </p>

          <p className="description">
            Is this correct? You can proceed to checkout or go back to
            plan selection if something is off. Subscription discount
            codes can also be redeemed at the checkout.
          </p>

          <div className="modal-footer">
            <h3>$14.00 / mo</h3>

            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;