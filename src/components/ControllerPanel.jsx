import React from "react";
import { connect } from "react-redux";

import { defaultCalculatorData } from "../reducers";
import { targetName } from "../App";
import { updateData } from "../actions";
import { steps } from "../App";

const ControllerPanel = ({ data, updateData }) => {
  const { step, target, gender, weight, height, age, activity, score } = data;
  const disabledNext = () => {
    if (target === "") return true;
    if (step === 2 && gender === "") return true;
    if (step === 2 && weight <= 0) return true;
    if (step === 2 && height <= 0) return true;
    if (step === 2 && age <= 0) return true;
    if (step === 2 && activity === "") return true;
    if (step >= steps) return true;
    return false;
  };

  const download = `Target: ${targetName(target)}\nGender: ${gender}\nWeight: ${weight} kg\nHeight: ${height} cm\nAge: ${age}\nActivity: ${activity}\nCalories to consume per day: ${score}`;

  if (data.step === steps)
    return (
      <div className={`controllers `}>
        <button onClick={() => updateData(defaultCalculatorData)}>
          Refill
        </button>
        <a
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(download)}`}
          download="data.txt"
        >
          Download data
        </a>
      </div>
    );

  return (
    <div className={`controllers `}>
      <button
        disabled={step === 1}
        onClick={() => updateData({ step: step - 1 })}
      >
        Prev
      </button>
      <button
        disabled={disabledNext()}
        onClick={() => updateData({ step: step + 1 })}
      >
        {step === steps - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { updateData })(ControllerPanel);
