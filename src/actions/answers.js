const trueOrFalse = (answerId) => {
  return {
    type: "TRUE_ANSWER",
    payload: answerId
  };
};

export default trueOrFalse