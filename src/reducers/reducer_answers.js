export default function (state = 0, action) {
  switch(action.type) {
    case "TRUE_ANSWER":
    console.log("state", state)
      return state + 1;
  }
  return state;
}