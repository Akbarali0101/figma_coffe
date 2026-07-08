import "./Our_collect.css";



const Collection = () => {
  // Qahvalar ma'lumotlar bazasi (Real loyihada bu ko'pincha API yoki alohida fayldan keladi)
  const coffees = [
    {
      id: 1,
      name: 'Gran Espresso',
      desc: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
      img: '/img/1.png'
    },
    {
      id: 2,
      name: 'Planalto',
      desc: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
      img: '/img/planalto.png'
    },
    {
      id: 3,
      name: 'Piccollo',
      desc: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
      img: '/img/3.png'
    },
    {
      id: 4,
      name: 'Danche',
      desc: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
      img: '/img/4.png'
    }
  ];

  return (
    <div className="collection-section">
      <div className="collection-container">
        
        {/* Orqa fondagi katta xira matn */}
        <h2 className="collection-bg-text">our collection</h2>

        {/* Kartalar to'plami */}
        <div className="collection-grid">
          {coffees.map((coffee) => (
            <div key={coffee.id} className="coffee-card">
              <div className="coffee-img-wrapper">
                <img src={coffee.img} alt={coffee.name} className="coffee-card-img" />
              </div>
              <div className="coffee-card-info">
                <h3 className="coffee-card-title">{coffee.name}</h3>
                <p className="coffee-card-desc">{coffee.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collection;