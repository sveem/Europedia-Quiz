export default function (state = [], action) {
  switch(action.type) {
    case "TRUE_ANSWER" :
    console.log("TRUE ANSWER", action.payload)
      return action.payload
  }
  return state;
}