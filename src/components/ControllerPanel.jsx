import React from "react";
import { connect } from "react-redux";

import { updateData } from "../actions";
import {steps} from '../App'

const ControllerPanel = ({data, updateData}) => {
  const disabledNext = () => {
    const {step, target, gender, weight, height, age, activity} = data
    if(target === '') return true
    if(step === 2 && gender === '') return true
    if(step === 2 && weight === 0) return true
    if(step === 2 && height === 0) return true
    if(step === 2 && age === 0) return true
    if(step === 2 && activity === '') return true
    return false
  }

  return (
    <div className={`controllers ${data.step >= steps ? 'controllers--unvisible' : ''}`}>
      <button disabled={data.step === 1} onClick={() => updateData({step: data.step - 1})}>
        Prev
      </button>

      <button disabled={disabledNext()} onClick={() => updateData({step: data.step + 1})}>
        Next
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {data: state.data}
}

export default connect(mapStateToProps, {updateData})(ControllerPanel);
