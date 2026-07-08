import "./Header.css";

export function Header({ 
  title, 
  description, 
  backgroundImage = "/hero-bg/home.png", 
  showButton = false 
}) {
  
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
          {/* Logotip rasmdagidek bu yerga qo'yilmaydi, u alohida Navbarda bo'lishi kerak */}
          <h1>{title}</h1>
          <p>{description}</p>
          {showButton && <button>Create your plan</button>}
        </div>
      </div>
    </header>
  );
}