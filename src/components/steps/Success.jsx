import React from "react";
import { connect } from "react-redux";


import Error from "../Error";

const Succsess = ({ data }) => {
  const { target, weight, height, age, activity } = data;
  let activityValue = null;
  //Calculation for male
  const maleTM = () => {
    switch (activity) {
      case "0":
        activityValue = 1.3;
        break;
      case "1":
        activityValue = 1.6;
        break;
      case "2":
        activityValue = 1.7;
        break;
      case "3":
        activityValue = 2.1;
        break;
      case "4":
        activityValue = 2.4;
        break;
      default:
        return <Error />;
    }

    const score =
      activityValue * (66.47 + 13.75 * +weight + 5 * +height + 6.775 * +age) +
      +target;

    if (score < 1300) return 1300;
    return score;
  };

  //Calculation for female
  const femaleTM = () => {
    switch (activity) {
      case "0":
        activityValue = 1.3;
        break;
      case "1":
        activityValue = 1.5;
        break;
      case "2":
        activityValue = 1.6;
        break;
      case "3":
        activityValue = 1.9;
        break;
      case "4":
        activityValue = 2.2;
        break;
      default:
        return <Error />;
    }

    const score =
      activityValue *
        (655.1 + 9.563 * +weight + 1.85 * +height - 4.676 * +age) +
      +target;

    if (score < 1300) return 1300;
    return score;
  };

  //Final calculate
  const calculate = () => {
    let score = null;
    if (data.gender === "male") {
      score = Math.round(maleTM() * 100) / 100
    } else{
      score = Math.round(femaleTM() * 100) / 100
    }

    return `You should consume ${score} calories per day.`
  };

  return <h2>{calculate()}</h2>;
};

const mapStateToProps = (state) => {
  return {data: state.data}
}

export default connect(mapStateToProps, {})(Succsess);