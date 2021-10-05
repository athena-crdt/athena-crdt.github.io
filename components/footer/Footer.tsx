const Footer = (props: any) => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">{props.name}</h1>
            <span className="footer__subtitle">{props.footer.tag}</span>
          </div>
          <ul className="footer__links"></ul>
          <div className="footer__socials">
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; {props.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
