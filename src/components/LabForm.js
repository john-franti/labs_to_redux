import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { addLab } from "../redux";

const INITIAL_STATE = {
  labName: "",
  students: [],
};

class LabForm extends Component {
  state = INITIAL_STATE;

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddLab(this.state);
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
          <h3>Add a new lab</h3>
        </Container>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="label-class" htmlFor="studentName">
              New Lab Name:
            </label>

            <input
              type="text"
              name="labName"
              value={this.state.labName}
              onChange={this.handleChange}
              placeholder="please enter a name"
            />
          </div>
          <div className="form-group">
            <Button type="submit" variant="danger">
              Add Lab
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {}
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onAddLab: (studentFromState) => dispatch(addLab(studentFromState)),
    //   onAddLab: (studentFromState) =>
    //     dispatch({ type: "ADD_STUDENT", payload: studentFromState }),
    // };
  };
};

export default connect(null, mapDispatchToProps)(LabForm);
