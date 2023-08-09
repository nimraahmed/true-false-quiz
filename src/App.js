import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import QuizApp from "./components/QuizApp";

const App = () => {
  return (
    <Router>
      <QuizApp />
    </Router>
  );
};

export default App;
