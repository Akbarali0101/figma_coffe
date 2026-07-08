import { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState('250g');

  const options = [
    { title: '250g', desc: 'Perfect for the solo drinker. Yields about 12 delicious cups.' },
    { title: '500g', desc: 'Perfect option for a couple. Yields about 40 delectable cups.' },
    { title: '1000g', desc: 'Perfect for offices and events. Yields about 90 delightful cups.' }
  ];

  return (
    <div className="order-form-container">
      <div className="order-form-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>How much would you like?</h2>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▲</span>
      </div>

      {isOpen && (
        <div className="order-form-grid">
          {options.map((option) => (
            <div
              key={option.title}
              className={`order-form-card ${selected === option.title ? 'active' : ''}`}
              onClick={() => setSelected(option.title)}
            >
              <h3>{option.title}</h3>
              <p>{option.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderForm;