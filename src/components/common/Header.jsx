import "./Header.css";

const CoffeeroastersLogo = () => (
  <img src="/logo.png" alt="logo" width="250px" />
);

export default function Header({ backgroundImage = "/hero-bg/bg.png" }) {
  const headerStyle = {
    backgroundImage: `linear-gradient(
        to right,
        rgba(0,0,0,.75),
        rgba(0,0,0,.45),
        rgba(0,0,0,.1)
      ),
      url("${backgroundImage}")`,
  };

  return (
    <header className="header-wrapper">
      <div className="header-box" style={headerStyle}>
        <div className="header-content">
          <CoffeeroastersLogo />
          <h1>Great coffee made simple.</h1>

          <p>
            Start your mornings with the world's best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>

          <button>Create your plan</button>
        </div>
      </div>
    </header>
  );
}