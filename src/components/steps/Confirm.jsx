import React from "react";
import { connect } from "react-redux";

import Error from '../Error'

const Confirm = ({
  data: { target, gender, weight, height, age, activity },
}) => {

  const targetName = () => {
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

  const activityName = () => {
    switch (activity) {
      case '0':
        return 'Very Low'
      case '1':
        return 'Low'
      case '2':
        return 'Middle'
      case '3':
        return 'High'
      case '4':
        return 'Very High'
      default:
        return <Error />
    }
  }

  return (
    <>
      <h1>Is everything correct?</h1>
      <h4>If not, back to previous cards.</h4>
      <p><b>Your traget:</b> {targetName()}</p>
      <p><b>Your gender:</b> {gender}</p>
      <p><b>Your weight:</b> {weight} kg</p>
      <p><b>Your height:</b> {height} cm</p>
      <p><b>Your age:</b> {age}</p>
      <p><b>Your activity:</b> {activityName()}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {data: state.data}
}

export default connect(mapStateToProps, {})(Confirm);
