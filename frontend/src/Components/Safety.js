import React from "react";
import img1 from "../safety-image/img1.png";
import img2 from "../safety-image/img2.png";
import img3 from "../safety-image/img3.png";
import img4 from "../safety-image/img4.png";
import img5 from "../safety-image/img5.jpg";
import img6 from "../safety-image/img6.png";
import img7 from "../safety-image/img7.png";

const Safety = () => {
  return (
    <section
      id="instructors"
      className="p-3"
      style={{ backgroundColor: "#00D9FF" }}
    >
      <div class="container">
        <h2 class="text-center">
          Safety tips for students to prevent foodborne diseases:
        </h2>

        <div class="row g-4">
          <div class="col-md">
            <div>
              <div class="text-center">
                <img src={img1} alt="" class=" mb-3 img-fluid " />
                <h6>
                  Choose restaurants that are clean and well-maintained. Look
                  for restaurants that have clean floors, tables, and
                  countertops. The food should be displayed in a sanitary manner
                  and the staff should be wearing gloves and hairnets.
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div>
              <div class="text-center">
                <img src={img2} alt="" class=" mb-3 img-fluid rounded-circle" />
                <h6>
                  Avoid buffets and salad bars. Buffets and salad bars are more
                  likely to be contaminated with harmful bacteria because the
                  food is often left out at room temperature for extended
                  periods of time.
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div>
              <div class="text-center">
                <img src={img3} alt="" class=" mb-3 img-fluid rounded-circle" />
                <h6>
                  Order hot food that has been cooked to order. This will help
                  to ensure that the food is cooked to a safe temperature and
                  killed any harmful bacteria.
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div>
              <div class="text-center">
                <img src={img4} alt="" class=" mb-3 img-fluid rounded-circle" />
                <h6>
                  Avoid raw or undercooked meat, poultry, and seafood. These
                  foods can contain harmful bacteria that can cause food
                  poisoning.
                </h6>
              </div>
            </div>
          </div>

          <div class="col-md">
            <div>
              <div class="text-center">
                <img src={img6} alt="" class=" mb-3 img-fluid rounded-circle" />
                <h6>
                  Wash your hands before and after eating. This is one of the
                  best ways to prevent the spread of foodborne illness.
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div>
              <div class=" text-center">
                <img src={img7} alt="" class=" mb-3 img-fluid rounded-circle" />
                <h6>
                  If you are not feeling well, do not eat out. If you are sick,
                  your immune system is weakened and you are more likely to get
                  sick from food poisoning.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
