const initialState = 0;
const updateValue = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default updateValue;

/*const [x, setX] = useState(0);
setX(){
  x = x+1;
}*/
