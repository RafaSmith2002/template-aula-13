/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from "axios";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../../services/api";
import { useEffect } from 'react';

export default function DetailsPage() {

  const [tagDetail, setTagDetail] = useState([{}]);
  const id = useParams();
  
  const getTag = useCallback((gid) => {
    axios.get(`${URL_BASE}/tags/${id.id}`, Auth).then((res) => {
      setTagDetail([res.data.data]).catch((err) => {
        console.log(err);
      });
    });
  }, [id.id]);

  useEffect(() => {
    getTag();
  }, [getTag]);
      
  return (
    <div>
      {tagDetail &&
        tagDetail.map((item) => {
          return (
            <div key={item?.gid}>
              <p>-------------------------------------------</p>
              <h2>Detalhes da Tag</h2>
              <h4>{item.name}</h4>
              <p> Criado em: {item.created_at}</p>
              <p> Anotações: {item.notes}</p>
              <button onClick={() => setTagDetail([])}>FECHAR</button>
            </div>
           );
        })}  
    </div>
  );    
}


