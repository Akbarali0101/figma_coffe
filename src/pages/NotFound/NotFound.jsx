import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      {/* Background elements */}
      <div className="background-elements">
        <div className="coffee-beans-floating">
          {/* Floating coffee beans will be animated via CSS */}
          <div className="coffee-bean bean-1"></div>
          <div className="coffee-bean bean-2"></div>
          <div className="coffee-bean bean-3"></div>
          <div className="coffee-bean bean-4"></div>
          <div className="coffee-bean bean-5"></div>
          <div className="coffee-bean bean-6"></div>
        </div>

        <div className="floating-particles">
          {/* Floating particles for ambiance */}
          <div className="particle p-1"></div>
          <div className="particle p-2"></div>
          <div className="particle p-3"></div>
          <div className="particle p-4"></div>
          <div className="particle p-5"></div>
        </div>

        <div className="sunlight-rays"></div>
        <div className="blurred-cafe-windows"></div>
        <div className="coffee-stains"></div>
        <div className="broken-signs"></div>
      </div>

      {/* Main content */}
      <div className="not-found-content">
        {/* Main illustration */}
        <div className="illustration-container">
          <div className="coffee-cup">
            <div className="cup"></div>
            <div className="cup-fill"></div>
            <div className="cup-top"></div>
            <div className="handle"></div>
            <div className="steam">
              {/* Steam that transforms into 404 */}
              <div className="steam-line steam-1"></div>
              <div className="steam-line steam-2"></div>
              <div className="steam-line steam-3"></div>
              <div className="steam-line steam-4"></div>
            </div>
            <div className="saucer"></div>
            <div className="spoon"></div>
          </div>

          <div className="spilled-coffee"></div>
          <div className="coffee-beans-scattered">
            <div className="bean scattered-1"></div>
            <div className="bean scattered-2"></div>
            <div className="bean scattered-3"></div>
            <div className="bean scattered-4"></div>
            <div className="bean scattered-5"></div>
          </div>
          <div className="croissant"></div>
          <div className="sleeping-cat"></div>
          <div className="small-leaves">
            <div className="leaf leaf-1"></div>
            <div className="leaf leaf-2"></div>
            <div className="leaf leaf-3"></div>
            <div className="leaf leaf-4"></div>
          </div>
        </div>

        {/* Text content */}
        <div className="text-content">
          <h1 className="not-found-heading">Oops...</h1>
          <h2 className="not-found-subheading">Your Coffee Took the Wrong Turn</h2>
          <p className="not-found-description">
            Looks like the page you're looking for has wandered off for another cup of coffee.
            Don't worry—we'll help you find your way back.
          </p>

          {/* Buttons */}
          <div className="button-container">
            <button className="btn-primary">
              <span className="button-icon">☕</span> Back to Home
            </button>
            <button className="btn-secondary">
              <span className="button-icon">📖</span> Browse Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
