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
            { value: "0", text: "Very low" },
            { value: "1", text: "Low" },
            { value: "2", text: "Middle" },
            { value: "3", text: "High" },
            { value: "4", text: "Very High" },
          ]}
        />
      </div>
    </>
  );
};

export default FormPersonDetails;