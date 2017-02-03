const nextQuestion = (randomQuestionId) => {
  return {
    type: "NEXT_QUESTION",
    payload: randomQuestionId
  };
};

export default nextQuestion