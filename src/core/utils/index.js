import moment from "moment";

export const getFormattedTime = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
};

export const calculateSumOfNumbers = (array) => {
  return array.reduce((totalSum, obj) => totalSum + obj.amount, 0);
};
