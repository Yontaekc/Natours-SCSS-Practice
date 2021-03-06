import React from "react";

let Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="img/nat-8.jpg" alt="Tour photo" className="popup__img" />
          <img src="img/nat-9.jpg" alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab modi
            laborum possimus eligendi ipsa! Tenetur laboriosam odio, dicta
            dolores, ab corporis, necessitatibus amet doloribus sint dolore odit
            autem. Ratione, quae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab modi laborum possimus eligendi ipsa! Tenetur
            laboriosam odio, dicta dolores, ab corporis, necessitatibus amet
            doloribus sint dolore odit autem. Ratione, quae. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ab modi laborum possimus
            eligendi ipsa! Tenetur laboriosam odio, dicta dolores, ab corporis,
            necessitatibus amet doloribus sint dolore odit autem. Ratione, quae.
          </p>
          <a href="#" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
