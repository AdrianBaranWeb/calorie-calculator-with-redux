import React from "react";
import { connect } from "react-redux";
import { updateData } from "../../actions";

const NumberField = ({ name, identifiers, data, updateData }) => {
  const radioOptions = identifiers.map((id) => (
    <div className="row__option" key={id}>
      <label htmlFor={id}>{id}</label>
      <input type="radio" name={name} id={id} value={id} checked={data[name] === id} onChange={() => updateData({[name]: id})}/>
    </div>
  ));

  return <>{radioOptions}</>;
};

const mapStateToProps = (state) => {
  return {data: state.data}
}

export default connect(mapStateToProps, { updateData })(NumberField);