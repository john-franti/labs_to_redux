import { ADD_LAB, ASSIGN_STUDENT_TO_LAB } from "./labTypes";

const initialState = {
  data: [{labName: "silly lab", students: [{studentName: "Jane"}]}],
};

const labReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LAB:
      return {
        ...state,
        data: [...state.labs, action.payload],
      };
    case ASSIGN_STUDENT_TO_LAB:
      return {
        ...state,
        labs: state.data.map((lab) => {
          if (lab.id === action.payload.lab.id) {
            return { ...lab, students: [lab.students, action.payload.student] };
          }
          return lab;
        }),
      };
    default:
      return state;
  }
};

export default labReducer;
