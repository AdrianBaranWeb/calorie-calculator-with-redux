import React from "react";
import { connect } from "react-redux";
import { updateData } from "../../actions";

const NumberField = ({ id, options, data, updateData }) => {
  const selectOptions = options.map((option) => (
    <option value={option.value} disabled={option.disabled ? true : false}>
      {option.text}
    </option>
  ));

  return (
    <select
      name={id}
      id={id}
      value={data[id]}
      onChange={(e) => updateData({ [id]: e.target.value })}
    >
      {selectOptions}
    </select>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { updateData })(NumberField);
