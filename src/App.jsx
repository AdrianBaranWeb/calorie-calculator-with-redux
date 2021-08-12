import React from "react";
import { connect } from "react-redux";

import SelectField from "./components/fields/SelectField";
import ControllerPanel from "./components/ControllerPanel";
import FormPersonDetails from "./components/steps/FormPersonDetails";
import Confirm from "./components/steps/Confirm";
import Succsess from "./components/steps/Success";
import Error from "./components/Error";
import "./App.css";

export const steps = 4;

const App = ({ data }) => {
  //Currently displayed step
  const currentStep = () => {
    switch (data.step) {
      case 1:
        return (
          <SelectField
            id="target"
            options={[
              { value: "", text: "Choose your target", disabled: true },
              { value: "300", text: "Put on weight" },
              { value: "-1000", text: "Lost weight" },
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
