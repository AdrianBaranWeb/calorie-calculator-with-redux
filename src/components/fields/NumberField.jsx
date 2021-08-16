import React from "react";
import { connect } from "react-redux";
import { updateData } from "../../actions";

const NumberField = ({ id, data, updateData }) => {
  const increment = () => {
    return updateData({ [id]: +data[id] + 1 });
  };
  const decrement = () => {
    const value = +data[id] - 1
    return value <= 0  ? null : updateData({ [id]: value });
  };

  return (
    <>
      <label htmlFor={id}>{id}</label>
      <div className="controlled-input">
        <button className="controlled-input__button" onClick={decrement}>
          -
        </button>
        <input
          type="number"
          name={id}
          id={id}
          value={data[id]}
          onChange={(e) => {
            const value = e.target.value 
            return +value < 0 ? updateData({ [id]: 0}) : updateData({ [id]: value})
          }}
        />
        <button className="controlled-input__button" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { updateData })(NumberField);
