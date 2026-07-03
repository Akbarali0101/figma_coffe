import "./Works.css"


const Works = ({ isDark }) => {
  const steps = [
    {
      id: "01",
      title: "Pick your coffee",
      desc: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
    },
    {
      id: "02",
      title: "Choose the frequency",
      desc: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
    },
    {
      id: "03",
      title: "Receive and enjoy!",
      desc: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
    }
  ];

  return (
    <div className={`works-section-light ${isDark && 'works-section-dark'}`}>
      <div className="works-container">

        <h5 className="works-top-title">How it works</h5>

        {/* Tepadagi progress chizig'i (Faqat desktopda ko'rinadi) */}
        <div className="works-progress-bar">
          <div className="progress-line"></div>
          <div className="progress-circle"></div>
          <div className="progress-circle"></div>
          <div className="progress-circle"></div>
        </div>

        {/* Bosqichlar (Steps) ro'yxati */}
        <div className="works-steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <span className="step-number">{step.id}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Pastdagi harakatga chaqiruvchi tugma */}
        <button className="works-btn">Create your plan</button>

      </div>
    </div>
  );
};

export default Works;