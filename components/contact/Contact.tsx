const Contact = (props: any) => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Us</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon" />
            <div>
              <h3 className="contact__title">Phone</h3>
              <span className="contact__subtitle">{props.contact.phone}</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">{props.contact.email}</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                {props.contact.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
