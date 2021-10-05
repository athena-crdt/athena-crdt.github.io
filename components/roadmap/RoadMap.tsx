const RoadMap = (props: any) => {
  return (
    <section className="qualification section" id="roadmap">
      <h2 className="section__title">Roadmap</h2>
      <div className="section__subtitle">{props.roadmap.subtitle}</div>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
            data-target="#roadmap-default"
          >
            <i className="uil uil-channel qualification__icon" />
            {props.roadmap.tab1}
          </div>
          <div
            className="qualification__button button--flex"
            data-target="#beyond"
          >
            <i className="uil uil-database qualification__icon" />
            {props.roadmap.tab2}
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className="qualification__content qualification__active"
            data-content
            id="roadmap-default"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {props.roadmap['roadmap-default'][0].name}
                </h3>
                <span className="qualification__subtitle">
                  {props.roadmap['roadmap-default'][0].details}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  {props.roadmap['roadmap-default'][0].date}
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {props.roadmap['roadmap-default'][1].name}
                </h3>
                <span className="qualification__subtitle">
                  {props.roadmap['roadmap-default'][1].details}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  {props.roadmap['roadmap-default'][1].date}
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {props.roadmap['roadmap-default'][2].name}
                </h3>
                <span className="qualification__subtitle">
                  {props.roadmap['roadmap-default'][2].details}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  {props.roadmap['roadmap-default'][2].date}
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
          <div className="qualification__content" data-content id="beyond">
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {props.roadmap['roadmap-beyond'][0].name}
                </h3>
                <span className="qualification__subtitle">
                  {props.roadmap['roadmap-beyond'][0].details}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  {props.roadmap['roadmap-beyond'][0].date}
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {props.roadmap['roadmap-beyond'][1].name}
                </h3>
                <span className="qualification__subtitle">
                  {props.roadmap['roadmap-beyond'][1].details}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  {props.roadmap['roadmap-beyond'][1].date}
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
