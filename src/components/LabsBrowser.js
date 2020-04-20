import React from "react";
import Lab from "./Lab";
import { connect } from "react-redux";

class LabsBrowser extends React.Component {
  renderLabs = () => {
    console.log(this.props.labList)
    return this.props.labList.map((lab, index) => {
      return <Lab key={index} lab={lab} />;
    });
  };

  render() {
    return <ul>{this.renderLabs()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    labList: state.labs.data,
  };
};

export default connect(mapStateToProps)(LabsBrowser);
