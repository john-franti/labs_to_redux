import React from "react";
import StudentsBrowser from "./components/StudentsBrowser";
import LabsBrowser from './components/LabsBrowser'
import StudentForm from "./components/StudentForm";
import store from "./redux/store";
import { Provider } from "react-redux";



class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello 012720 from App Component</h1>
          <LabsBrowser />
          <StudentForm />
          <StudentsBrowser />
        </div>
      </Provider>
    );
  }
}

export default App;
