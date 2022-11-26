import axios from "axios";
import { useEffect, useState } from "react";
import { Auth, URL_BASE } from "../services/api";

export function useRequestData(parametros, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {

    axios
      .get(`${URL_BASE}${parametros}`, Auth)
      .then((response) => {setData(response.data.data);})
      .catch((erro) => {alert(erro);});

  }, [parametros]);

  return data;
}
