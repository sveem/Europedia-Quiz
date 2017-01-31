export default function (state = [], action) {
  switch(action.type) {
    case "TRUE_ANSWER" :
    console.log("TRUE ANSWER")
      return action.payload
  }
  return state;
}