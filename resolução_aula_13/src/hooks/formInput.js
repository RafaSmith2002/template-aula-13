import { useState } from "react";

export default function useInput(initialValue) {
    
  const [texto, setTexto] = useState(initialValue);

  const handleTexto = (evento) => {
    setTexto(evento.target.value);
  };

  return[texto, handleTexto]
}
