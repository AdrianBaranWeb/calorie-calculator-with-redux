import React from "react";
import { connect } from "react-redux";
import { updateData } from "../../actions";
import { IoCaretDownOutline } from "react-icons/io5";

const NumberField = ({ id, options, data, updateData }) => {
  const selectOptions = options.map((option) => (
    <option
      key={option.value}
      value={option.value}
      disabled={option.disabled ? true : false}
    >
      {option.text}
    </option>
  ));

  return (
    <div className="select__field">
      <select
        name={id}
        id={id}
        value={data[id]}
        onChange={(e) => updateData({ [id]: e.target.value })}
      >
        {selectOptions}
      </select>
      <label htmlFor={id}>
        <IoCaretDownOutline />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { updateData })(NumberField);
