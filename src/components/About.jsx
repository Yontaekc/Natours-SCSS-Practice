import React from "react";

let About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab modi
            laborum possimus eligendi ipsa! Tenetur laboriosam odio, dicta
            dolores, ab corporis, necessitatibus amet doloribus sint dolore odit
            autem. Ratione, quae.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            repellat sapiente molestiae fuga sit consequuntur mollitia sunt!
          </p>

          <a href="#" className="btn-text">
            Learn More &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="img/nat-1-large.jpg"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="img/nat-2-large.jpg"
              alt="Photo2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="img/nat-3-large.jpg"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
