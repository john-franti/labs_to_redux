import { ADD_LAB, ASSIGN_STUDENT_TO_LAB } from "./labTypes";

export const addLab = lab => {
    return {
        type: ADD_LAB,
        payload: lab
    }
}

export const addStudentToLab = (student, lab) => {
    return {
        type: ASSIGN_STUDENT_TO_LAB,
        payload: {student, lab}
    }
}