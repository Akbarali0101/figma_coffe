import  "./Home.css";





function Home() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Matnlar joylashgan qism */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            Great coffee <br className="desktop-break" /> made simple.
          </h1>
          <p className="hero-desc">
            Start your mornings with the world's best coffees. Try our 
            expertly curated artisan coffees from our best roasters 
            delivered directly to your door, at your schedule.
          </p>
          <button className="hero-cta-btn">
            Create your plan
          </button>
        </div>

        {/* Rasm joylashgan qism (O'zingiz rasm yo'lini qo'yasiz) */}
        <div className="hero-image-wrapper">
          <img 
            src="./common/public/img/home.png" 
            alt="Coffee preparation" 
            className="hero-img"
          />
        </div>

      </div>
    </section>

  );
}


export default Home;