import React, { useState } from "react";
import "./main.css";

const PokemonCardD = ({
  image,
  name,
  type,
  hp1,
  hp2,
  xp,
  weight,
  height,
  stardust,
  candy,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const style = type + " thumb-container";
  return (
    <>
      <div onClick={toggleModal} className={style}>
       
        <div className="img-container">
          <img src={image} alt={name} />
          <div className="detail-wrapper">
            <h3 id="update_name">{name}</h3>
            <small>Type: {type}</small>
          </div>
        </div>
      </div>

      {modal && (
        <div className="popup">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="content">
            <div
              className="col-md-5 col-sm-5 pokemon-card"
              id="pokemon_details"
            >
              <div className="detail-container">
                <div className="title-container">
                  <div className="img-container">
                    <img
                      className="img_size"
                      src={image}
                      alt={name}
                      srcSet=""
                    />
                  </div>
                  <h3 className="name text-center" id="update_name">
                    {name}
                  </h3>
                  <hr className="my-2" />
                  <div className="stats text-center">
                    <span className="first cp-text col-md-6" id="update_hp">
                      HP {hp1}/{hp2}
                    </span>
                    <span className="cp-text col-md-6" id="update_cp">
                      XP {xp}
                    </span>
                  </div>
                </div>
                <button className="btn-transfer" onClick={toggleModal}>
                  {" "}
                  &#8678; Back
                </button>
                <div className="attributes-container">
                  <div
                    className="col attributes-content"
                    style={{ minWidth: "42%" }}
                  >
                    <p className="cp-text" id="update_type">
                      {type}
                    </p>
                    <small className="text-muted">Type</small>
                  </div>
                  <div className="col attributes-content">
                    <p className="cp-text" id="update_weight">
                      {weight}
                    </p>
                    <small className="text-muted">Weight</small>
                  </div>
                  <div className="col attributes-content">
                    <p className="cp-text no-border" id="update_height">
                      {height}
                    </p>
                    <small className="text-muted">Height</small>
                  </div>
                </div>
                <div className="player-data">
                  <div className="col data-container">
                    <p className="stardust" id="update_stardust">
                      {stardust}
                    </p>
                    <p className="muted-text">Stardust</p>
                  </div>
                  <div className="col data-container">
                    <p className="stardust" id="update_candy">
                      {candy}
                    </p>
                    <p className="muted-text" id="update_name">
                      {name} Candy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCardD;
