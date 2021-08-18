import React from "react";
import { connect } from "react-redux";

import { targetName } from "../../App";

const Confirm = ({
  data: { target, gender, weight, height, age, activity },
}) => {


  return (
    <>
      <h1>Is everything correct?</h1>
      <h4>If not, back to previous cards.</h4>
      <p><b>Your traget:</b> {targetName(target)}</p>
      <p><b>Your gender:</b> {gender}</p>
      <p><b>Your weight:</b> {weight} kg</p>
      <p><b>Your height:</b> {height} cm</p>
      <p><b>Your age:</b> {age}</p>
      <p><b>Your activity:</b> {activity}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {data: state.data}
}

export default connect(mapStateToProps, {})(Confirm);
