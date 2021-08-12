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
      <h2>If not, back to previous cards.</h2>
      <p>Your traget: {targetName()}</p>
      <p>Your gender: {gender}</p>
      <p>Your weight: {weight}</p>
      <p>Your height: {height}</p>
      <p>Your age: {age}</p>
      <p>Your activity: {activityName()}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {data: state.data}
}

export default connect(mapStateToProps, {})(Confirm);
