import "./Chose.css"

const Chose = () => {
  const benefits = [
    {
      id: 1,
      icon: "☕", // Bu yerga keyinchalik o'z SVG yoki rasmingizni qo'yishingiz mumkin
      title: "Best quality",
      desc: "Discover an endless variety of the world's best artisan coffee from each of our roasters."
    },
    {
      id: 2,
      icon: "🎁",
      title: "Exclusive benefits",
      desc: "Special offers and swag when you subscribe, including 30% off your first shipment."
    },
    {
      id: 3,
      icon: "🚚",
      title: "Free shipping",
      desc: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
    }
  ];

  return (
    <div className="chose-section">
      <div className="chose-container">
        
        {/* Yuqoridagi to'q rangli asosiy blok */}
        <div className="chose-top-card">
          <h2 className="chose-title">Why choose us?</h2>
          <p className="chose-subtitle">
            A large part of our role is choosing which particular coffees will be featured 
            in our range. This means working closely with the best coffee growers to give 
            you a more impactful experience on every level.
          </p>
        </div>

        {/* Pastki qismda osilib turuvchi kartalar to'plami */}
        <div className="chose-benefits-wrapper">
          {benefits.map((item) => (
            <div key={item.id} className="benefit-card">
              <div className="benefit-icon">{item.icon}</div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Chose;
