export default function (state = [], action) {
  switch(action.type) {
    case "NEXT_QUESTION":
    console.log("NEXT QUESTION", action.payload);
      return action.payload;
  }
  return state;
}