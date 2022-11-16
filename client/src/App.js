import React, { Fragment } from "react";
import './App.css';

//Components
import FormUsed from "./components/FormUsed";

function App() {
  return (
   <Fragment>
    <div className="container">
    <FormUsed/>
    <FormUsed/>
    </div>
   </Fragment>
  );
}

export default App;
