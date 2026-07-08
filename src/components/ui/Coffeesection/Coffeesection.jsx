import { useState } from 'react';
import './Coffeesection.css';

const Coffeesection = () => {
  const [activeMenu, setActiveMenu] = useState('01');
  const [selectedCard, setSelectedCard] = useState('Filter');

  const menuItems = [
    { id: '01', title: 'Preferences' },
    { id: '02', title: 'Bean Type' },
    { id: '03', title: 'Quantity' },
    { id: '04', title: 'Grind Option' },
    { id: '05', title: 'Deliveries' }
  ];

  const cards = [
    { title: 'Capsule', desc: 'Compatible with Nespresso systems and similar brewers' },
    { title: 'Filter', desc: 'For pour over or drip methods like Aeropress, Chemex, and V60' },
    { title: 'Espresso', desc: 'Dense and finely ground beans for an intense, flavorful experience' }
  ];

  return (
    <div className="coffee-section-container">
      <div className="coffee-sidebar">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.id)}
          >
            <span className="sidebar-num">{item.id}</span>
            <span className="sidebar-text">{item.title}</span>
          </div>
        ))}
      </div>

      <div className="coffee-content">
        <div className="content-header">
          <h2>How do you drink your coffee?</h2>
          <span className="arrow-icon">▲</span>
        </div>

        <div className="cards-grid">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`coffee-card ${selectedCard === card.title ? 'selected' : ''}`}
              onClick={() => setSelectedCard(card.title)}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coffeesection;