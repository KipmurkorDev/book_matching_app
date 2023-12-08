import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import home_cover from "../../Assets/Images/home_cover.jpg";
import bestsellers_cover from "../../Assets/Images/bestsellers_cover.jpg";
import map_cover from "../../Assets/Images/map_cover.jpg";
import science_cover from "../../Assets/Images/science_cover.jpg";
import mood_cover from "../../Assets/Images/mood_cover.jpg";

const Card = ({ title, image, buttonText }) => (
  <div className="card py-2" style={{ maxWidth: "300px" }}>
    <h5 className="font-weight-bold">{title}</h5>
    <img
      src={image}
      alt={title}
      className="card-img-top img-fluid p-2"
      style={{ maxHeight: "250px", maxWidth: "100%", width: "100%" }}
    />
    <div className="card-body">
      <button className="btn btn-primary">{buttonText}</button>
    </div>
  </div>
);

function Home() {
  return (
    <div className="container-fluid">
      <div className="row mb-5 mt-1">
        <div className="col text-center">
          <img
            src={home_cover}
            alt="home cover"
            className="img-fluid"
            style={{ maxHeight: "200px", maxWidth: "100%", width: "100%" }}
          />
        </div>
        <div className="col text-center">
          <img
            src={home_cover}
            alt="home cover"
            className="img-fluid"
            style={{ maxHeight: "200px", maxWidth: "100%", width: "100%" }}
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-3 pl-4">
          <Card
            title="Best Sellers"
            image={bestsellers_cover}
            buttonText="Explore Best Sellers"
          />
        </div>

        <div className="col-md-3">
          <Card
            title="World Map"
            image={map_cover}
            buttonText="Explore World Map"
          />
        </div>

        <div className="col-md-3">
          <Card
            title="Mood & Emotion"
            image={mood_cover}
            buttonText="Explore Mood & Emotion"
          />
        </div>

        <div className="col-md-3">
          <Card
            title="Scientific Books"
            image={science_cover}
            buttonText="Explore Scientific Books"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
