import { useState } from 'react';
import './PlanSelector.css';

const PlanSelector = () => {
  // const [isOpenPreferences, setIsOpenPreferences] = useState(true);
  const [isOpenBeanType, setIsOpenBeanType] = useState(true);

  const [selectedCards, setSelectedCards] = useState({
    preferences: 'Filter',
    beanType: 'Decaf'
  });

  // const preferencesCards = [
  //   { title: 'Capsule', desc: 'Compatible with Nespresso systems and similar brewers' },
  //   { title: 'Filter', desc: 'For pour over or drip methods like Aeropress, Chemex, and V60' },
  //   { title: 'Espresso', desc: 'Dense and finely ground beans for an intense, flavorful experience' }
  // ];

  const beanTypeCards = [
    { title: 'Single Origin', desc: 'Distinct, high quality coffee from a specific family-owned farm' },
    { title: 'Decaf', desc: 'Just like regular coffee, except the caffeine has been removed' },
    { title: 'Blended', desc: 'Combination of two or three dark roasted beans of organic coffees' }
  ];

  const handleCardSelect = (section, title) => {
    setSelectedCards((prev) => ({
      ...prev,
      [section]: title
    }));
  };

  return (
    <div className="plan-selector-container">
    

      <div className="plan-accordion-block">
        <div 
          className="plan-content-header" 
          onClick={() => setIsOpenBeanType(!isOpenBeanType)}
        >
          <h2>What type of coffee?</h2>
          <span className={`plan-arrow-icon ${isOpenBeanType ? 'open' : ''}`}>▲</span>
        </div>

        {isOpenBeanType && (
          <div className="plan-cards-grid">
            {beanTypeCards.map((card) => (
              <div
                key={card.title}
                className={`plan-coffee-card ${selectedCards.beanType === card.title ? 'selected' : ''}`}
                onClick={() => handleCardSelect('beanType', card.title)}
              >
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default PlanSelector;