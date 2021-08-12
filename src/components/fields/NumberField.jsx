import React from "react";
import { connect } from "react-redux";
import { updateData } from "../../actions";

const NumberField = ({ id, data, updateData }) => {
  const checkData = () => data[id] <= 0 ? false : true;

  const increment = () => updateData({[id]: +data[id] + 1 });
  const decrement = () => checkData() ? updateData({[id]: +data[id] - 1 }) : null

  return (
    <>
      <label htmlFor={id}>{id}</label>
      <div className="controlled-input">
        <button className="controlled-input__button" onClick={decrement}>
          -
        </button>
        <input
          type='number'
          name={id}
          id={id}
          value={data[id]}
          onChange={(e) => {
            checkData()
              ? updateData({ [id]: e.target.value })
              : updateData({ [id]: 0 });
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
