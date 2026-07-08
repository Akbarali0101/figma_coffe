import './Hero.css';

const Hero = ({ backgroundImage }) => {
  const heroStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%), url('${backgroundImage}')`,
      }
    : {};

  return (
    <div className="subscribe-hero-container" style={heroStyle}>
      <div className="subscribe-hero-content">
        <h1 className="subscribe-hero-title">Create a plan</h1>
        <p className="subscribe-hero-desc">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe
          delivered fresh to your door.
        </p>
      </div>
    </div>
  );
};

export default Hero;