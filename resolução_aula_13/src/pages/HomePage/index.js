import { NavLink } from "react-router-dom";

export default function HomePage() {
    
  return (
    <div>
      <p>Bem Vindos ao Nosso Appiiii!!!</p>
      <div id="buttons-contain">
        <NavLink to={"/tags"}>Tags</NavLink>
        <NavLink to={"/tasks"}>Tasks</NavLink>
      </div>      
    </div>
  );
}