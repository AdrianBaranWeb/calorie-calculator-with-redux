import { combineReducers } from "redux";

const calculatorData = {
  step: 1,
  target: "",
  gender: "male",
  weight: 40,
  height: 150,
  age: 18,
  activity: "",
};

const calculatorDataReducer = (data = calculatorData, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...data, ...action.payload };
    default:
      return data;
  }
};

export default combineReducers({
  data: calculatorDataReducer,
});
