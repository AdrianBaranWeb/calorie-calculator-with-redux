import React, {useEffect} from "react";
import { connect } from "react-redux";

import { updateData } from "../../actions";

import Error from "../Error";

const Succsess = ({ data, updateData }) => {
  const {gender, target, weight, height, age, activity, score } = data;

  useEffect(() => {
    let pal = null

    const maleModel = () => {
      return pal * (66.47 + 13.75 * +weight + 5 * +height + 6.775 * +age) + +target
    }
    const femaleModel = () => {
      return pal * (655.1 + 9.563 * +weight + 1.85 * +height - 4.676 * +age) + +target
    }

    const isMale = gender === "male" ? true : false
    
    switch (activity) {
      case "Very low":
        pal = 1.3;
        break;
      case "Low":
        pal =  isMale ? 1.6 : 1.5;
        break;
      case "Middle":
        pal = isMale ? 1.7 : 1.6;
        break;
      case "High":
        pal = isMale ? 2.1 : 1.9;
        break;
      case "Very high":
        pal = isMale ? 2.4: 2.2;
        break;
      default:
        return <Error />;
    }

    const score = isMale ? maleModel() : femaleModel()

    if (score < 1300) return updateData({score: 1300});
    return updateData({score: Math.round(score * 100) / 100});
    
  }, [gender, target, weight, height, age, activity, updateData]);

  return <h2>You should consume {score} calories per day.</h2>;
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, {updateData})(Succsess);
