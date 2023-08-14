import React from "react";
import img1 from "../slider-image/img-1.png";
import img2 from "../slider-image/img-2.png";
import img3 from "../slider-image/img-3.png";
import img4 from "../slider-image/img-4.png";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img2} class="d-block w-100 img-fluid" alt="..." />
            <div class="carousel-caption d-md-block">
              <h6>
                Food poisoning is a problem that affects everyone on campus.
                <br />
                We're here to help you stay safe.
              </h6>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100 img-fluid" alt="..." />
            <div class="carousel-caption">
              <h6>
                Food poisoning can happen when food is contaminated with
                bacteria, viruses, or parasites.
                <br /> Be sure to cook food properly and practice goodhygiene.
              </h6>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100 img-fluid" alt="..." />
            <div class="carousel-caption d-md-block">
              <h6>
                Food poisoning can be serious and have a long-lasting impact on
                your health. <br />
                If you think you have food poisoning, see a doctor right away
              </h6>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img4} class="d-block w-100 img-fluid" alt="..." />
            <div class="carousel-caption d-md-block">
              <h6>
                If you think you have food poisoning, please report it to us so
                that we can help others stay safe.
              </h6>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
