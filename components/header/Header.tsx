const Header = (props: any) => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          {props.name}
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#roadmap" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Roadmap
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Contact Us
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close"></i>
        </div>
        <div className="nav__btns">
          <i className="uil uil-moon change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
