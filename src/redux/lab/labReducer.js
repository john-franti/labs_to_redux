import { ADD_LAB, ASSIGN_STUDENT_TO_LAB } from "./labTypes";

const initialState = {
  data: [{labName: "test lab", students: [{studentName: "test student"}]}],
};

const labReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LAB:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default labReducer;
