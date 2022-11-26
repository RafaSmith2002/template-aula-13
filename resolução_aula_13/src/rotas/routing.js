/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TasksPage from "../pages/TaskPages";
import TagsPage from "../pages/TagsPage";
import DetailsPage from "../pages/DetailsPage";

 function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/tasks" element={<TasksPage/>} />
      <Route exact path="/tags" element={<TagsPage/>} />
      <Route exact path="/details/:id" element={<DetailsPage/>} />  
    </Routes>    
  );
}

export default Routing