import { combineReducers } from "redux";

const calculatorData = {
  step: 1,
  target: "",
  gender: "male",
  weight: 40,
  height: 150,
  age: 18,
  activity: "",
  score: null,
};

const calculatorDataReducer = (data = calculatorData, action) => {
  if (action.type === "UPDATE_DATA") {
    return { ...data, ...action.payload };
  }

  return data;
};

export default combineReducers({
  data: calculatorDataReducer,
});
