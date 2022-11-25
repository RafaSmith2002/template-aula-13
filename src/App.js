import React, { useState } from "react";
import "./App.css";
import ShowTags from "./components/ShowTags/ShowTags";
import ShowTasks from "./components/ShowTasks/ShowTasks";

function App() {
  const [show, setShow] = useState("tags");

  return (
    <div className="App">
      <div id="buttons-contain">
        <button onClick={() => setShow("tags")}>Tags</button>
        <button onClick={() => setShow("tasks")}>Tasks</button>
      </div>
      <hr />

      {show === "tags" && <ShowTags />}
      {show === "tasks" && <ShowTasks />}

    </div>
  );
}

export default App;
