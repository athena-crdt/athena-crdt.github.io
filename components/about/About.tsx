const About = (props: any) => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Us</h2>
      <span className="section__subtitle">What we do</span>
      <div className="about__container container grid">
        <img src="img/about.png" alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">{props.about.text}</p>
          <div className="about__info">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="about__buttons"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
