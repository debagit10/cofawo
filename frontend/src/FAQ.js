import React from "react";

const FAQ = () => {
  return (
    <div class="p-3" id="questions">
      <div class="container">
        <h2 class="text-center mb-4">Frequently Asked Questions</h2>
        <div class="accordion" id="questions">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                Where exactly are you located?
              </button>
            </h2>
            <div
              id="question-one"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eaque optio ratione, obcaecati, placeat dolorum
                provident laboriosam perferendis facilis quod nesciunt nostrum
                aut hic exercitationem consectetur repellendus delectus
                doloribus adipisci laudantium non! Eveniet consequatur
                laudantium nostrum, esse, veritatis iure adipisci ipsa obcaecati
                sed id vitae suscipit delectus eum qui voluptate!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                How much does it cost to attend?
              </button>
            </h2>
            <div
              id="question-two"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eaque optio ratione, obcaecati, placeat dolorum
                provident laboriosam perferendis facilis quod nesciunt nostrum
                aut hic exercitationem consectetur repellendus delectus
                doloribus adipisci laudantium non! Eveniet consequatur
                laudantium nostrum, esse, veritatis iure adipisci ipsa obcaecati
                sed id vitae suscipit delectus eum qui voluptate!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                What do I need to know?
              </button>
            </h2>
            <div
              id="question-three"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eaque optio ratione, obcaecati, placeat dolorum
                provident laboriosam perferendis facilis quod nesciunt nostrum
                aut hic exercitationem consectetur repellendus delectus
                doloribus adipisci laudantium non! Eveniet consequatur
                laudantium nostrum, esse, veritatis iure adipisci ipsa obcaecati
                sed id vitae suscipit delectus eum qui voluptate!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
              >
                How do I sign up?
              </button>
            </h2>
            <div
              id="question-four"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eaque optio ratione, obcaecati, placeat dolorum
                provident laboriosam perferendis facilis quod nesciunt nostrum
                aut hic exercitationem consectetur repellendus delectus
                doloribus adipisci laudantium non! Eveniet consequatur
                laudantium nostrum, esse, veritatis iure adipisci ipsa obcaecati
                sed id vitae suscipit delectus eum qui voluptate!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-five"
              >
                Does it help me find a job?
              </button>
            </h2>
            <div
              id="question-five"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eaque optio ratione, obcaecati, placeat dolorum
                provident laboriosam perferendis facilis quod nesciunt nostrum
                aut hic exercitationem consectetur repellendus delectus
                doloribus adipisci laudantium non! Eveniet consequatur
                laudantium nostrum, esse, veritatis iure adipisci ipsa obcaecati
                sed id vitae suscipit delectus eum qui voluptate!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
