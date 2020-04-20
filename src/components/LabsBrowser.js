import React from "react";
import Lab from "./Lab";
import LabForm from "./LabForm";
import { connect } from "react-redux";

class LabsBrowser extends React.Component {
  renderLabs = () => {
    return this.props.labList.map((lab, index) => {
      return <Lab key={index} lab={lab} />;
    });
  };

  render() {
    return (
      <>
      <div className="col col-md-6">
      <LabForm />
        <h3>Current Labs</h3>
        <ul>{this.renderLabs()}</ul>
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    labList: state.labs.data,
  };
};

export default connect(mapStateToProps)(LabsBrowser);
