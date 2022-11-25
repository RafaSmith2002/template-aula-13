/* eslint-disable no-unused-vars */
import { useRequestData } from './../../hooks/useRequestData';

export default function ShowTasks() {
  const taskList = useRequestData("/projects/1202124799286437/tasks", []);

  return (
    <div className="App">      
      {taskList && taskList.map((item) => <h1>{item.name}</h1>)}
    </div>
  );
}
