import "./Header.css";

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-box">
        <div className="header-content">
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