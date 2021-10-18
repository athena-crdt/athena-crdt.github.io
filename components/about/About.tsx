const About = (props: any) => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Us</h2>
      <span className="section__subtitle">What we do</span>
      <div className="about__container container grid">
        <img src="img/arch.svg" alt="" height="400" className="about__img" />
        <div className="about__data">
          <p className="about__description">{props.about.text}</p>
          <div className="about__info">
            <div>
              <span className="about__info-title">
                {props.about.info[0].title}
              </span>
              <span className="about__info-name">
                {props.about.info[0].name}
              </span>
            </div>
            <div>
              <span className="about__info-title">
                {props.about.info[1].title}
              </span>
              <span className="about__info-name">
                {props.about.info[1].name}
              </span>
            </div>
          </div>
          <div className="about__buttons"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
