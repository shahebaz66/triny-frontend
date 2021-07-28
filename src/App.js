import React, { useEffect, useState } from "react";
import "./App.css";
import Tab from "./components/tab";
import axios from "axios";

function App() {
  var [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://triny-backend.herokuapp.com/getlist").then((res, err) => {
      var temp = [];

      for (var i of res.data.data) {
        temp.push({
          displayName: i.displayName,
          webhookState: i.webhookState,
          isFallback: i.isFallback,
          trainingPhrases: i.trainingPhrases,
          priority: i.priority,
        });
      }

      setState(temp);
    });
  }, []);
  return (
    <div className="App">
      {state.map((i, index) => {
        return <Tab key={index} data={i} />;
      })}
    </div>
  );
}

export default App;
