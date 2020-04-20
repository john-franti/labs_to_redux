import React from "react";
import Student from "./Student";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";


class StudentsBrowser extends React.Component {
  renderStudents = () => {
    return this.props.studentList.map((student, index) => {
      return <Student key={index} student={student} />;
    });
  };

  render() {
    return (
      <div className="col col-md-6">
        <StudentForm />
        <ul>{this.renderStudents()}</ul>
      </div>
    );
  }
}

// StudentsBrowser.defaultProps = {
//   studentList: []
// }

const mapStateToProps = (state) => {
  return {
    studentList: state.students.data,
  };
};

export default connect(mapStateToProps)(StudentsBrowser);
