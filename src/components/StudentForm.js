import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

const INITIAL_STATE = {
  studentName: "",
  enrolled: true,
};

class StudentForm extends Component {
  state = INITIAL_STATE;

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddStudent(this.state);
    this.setState(INITIAL_STATE);
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    // if (event.target.value.includes("1")) {
    //   alert("No numbers!");
    // } else {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // }
  };

  render() {
    return (
      <div>
        <Container>
          <h3>Add a new student</h3>
        </Container>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="label-class" htmlFor="studentName">
            New Student Name:
          </label>

          <input
            type="text"
            name="studentName"
            value={this.state.studentName}
            onChange={this.handleChange}
            placeholder="please enter a name"
          />
          </div>
          <div className="form-group">
          <Button type="submit" variant="danger">
            Add Student - Bootstrap Button
          </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default StudentForm;
