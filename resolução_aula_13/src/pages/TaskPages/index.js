import { useRequestData } from "../../hooks/useRequestData";

export default function TasksPage() {
  const taksList = useRequestData("/projects/1202132757380123/tasks", []);

  return (
    <div className="App">
      {taksList && taksList.map((item) => <h1>{item.name}</h1>)}
    </div>
  );
}
