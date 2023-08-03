import React from "react";

const Questionnaire = () => {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Gender
          </label>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
