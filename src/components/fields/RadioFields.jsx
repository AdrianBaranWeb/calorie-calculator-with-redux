import React from "react";
import { connect } from "react-redux";
import { updateData } from "../../actions";
import {IoMan, IoWoman} from "react-icons/io5";

const NumberField = ({ name, identifiers, data, updateData }) => {
  const labelIcon = (type) => {
    switch (type){
      case 'female': 
        return <IoWoman />
      case 'male': 
        return <IoMan />
      default: 
        return type
    }
  }

  const radioOptions = identifiers.map((id) => (
    <div className="row__option" key={id}>
      <input type="radio" name={name} id={id} value={id} checked={data[name] === id} onChange={() => updateData({[name]: id})}/>
      <label className='radio__label' htmlFor={id}>{labelIcon(id)}</label>
    </div>
  ));

  return <>{radioOptions}</>;
};

const mapStateToProps = (state) => {
  return {data: state.data}
}

export default connect(mapStateToProps, { updateData })(NumberField);