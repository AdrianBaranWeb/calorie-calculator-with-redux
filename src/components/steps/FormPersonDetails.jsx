import React from "react";

import NumberField from "../fields/NumberField";
import RadioFields from "../fields/RadioFields";
import SelectField from "../fields/SelectField";

const FormPersonDetails = () => {
  return (
    <>
      <div className="row">
        <RadioFields name="gender" identifiers={["male", "female"]} />
      </div>
      <div className="row">
        <div className="row__option">
          <NumberField id="weight" />
        </div>
      </div>
      <div className="row">
        <div className="row__option">
          <NumberField id="height" />
        </div>
      </div>
      <div className="row">
        <div className="row__option">
          <NumberField id="age" />
        </div>
      </div>
      <div className="row">
        <SelectField
          id="activity"
          options={[
            { value: "", text: "Choose your activity", disabled: true },
            { value: "Very low", text: "Very low" },
            { value: "Low", text: "Low" },
            { value: "Middle", text: "Middle" },
            { value: "High", text: "High" },
            { value: "Very high", text: "Very high" },
          ]}
        />
      </div>
      <small>Weight in kg and height in cm</small>
    </>
  );
};

export default FormPersonDetails;