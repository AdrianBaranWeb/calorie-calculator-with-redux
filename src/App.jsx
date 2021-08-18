import React from "react";
import { connect } from "react-redux";

import SelectField from "./components/fields/SelectField";
import ControllerPanel from "./components/ControllerPanel";
import FormPersonDetails from "./components/steps/FormPersonDetails";
import Confirm from "./components/steps/Confirm";
import Succsess from "./components/steps/Success";
import Error from "./components/Error";
import "./App.scss";

export const steps = 4;

export const targetName = (target) => {
  switch (target) {
    case '300':
      return 'Put on weight'
    case '-1000':
      return 'Lost weight'
    case '0':
      return 'Keep weight'
    default:
      return <Error />
  }
}

const App = ({ data }) => {
  //Currently displayed step
  const currentStep = () => {
    switch (data.step) {
      case 1:
        return (
          <SelectField
            id="target"
            options={[
              { value: "", text: 'Choose your target', disabled: true },
              { value: "300", text: "Put on weight" },
              { value: "0", text: "Keep weight" },
              { value: "-1000", text: "Lose weight" },
            ]}
          />
        );
      case 2:
        return <FormPersonDetails />;
      case 3:
        return <Confirm />;
      case 4:
        return <Succsess />;
      default:
        return <Error />;
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Calorie Calculator</h1>
        <div className="fieldset">{currentStep()}</div>
        <ControllerPanel />
      </div>
      <div className="hero-bg"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, {})(App);
