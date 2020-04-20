import { ADD_STUDENT } from "./studentTypes";
 
const initialState = {
  data: [{studentName: "Jane"}],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default studentReducer
