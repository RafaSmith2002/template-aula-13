/* eslint-disable react/jsx-no-undef */
import axios from "axios";
// import { useCallback, useState } from "react";
import useInput from "../../hooks/formInput";
import { useRequestData } from "../../hooks/useRequestData";
import { Auth, URL_BASE } from "../../services/api";

import { ButtonAdd, InputContain, WrapperList } from "./style";

export default function TagsPage() {
  const [tag, setTag] = useInput("")
  
  const tagList = useRequestData("/workspaces/1202132757380123/tags", []);
 
  const addItem = (item) => {
    axios
      .post(
        "https://app.asana.com/api/1.0/tags",
        {
          data: {
            color: "light-green",
            followers: [],
            name: `${item}`,
            notes: "esse é nosso primeiro teste",
            workspace: "1202132757380123",
          },
        },
        Auth
      )
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItem = (elemento) => {
    axios
      .delete(`${URL_BASE}/tags/${elemento}`, Auth)
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>"LISTA DOS BAGULHO"</h1>
      <hr />
      <div>
        <InputContain value={tag} onChange={setTag} placeholder={"Digite a nova tag"}/>
        <ButtonAdd onClick={() => addItem(tag)}>ADD</ButtonAdd>
      </div>

      {tagList &&
        tagList.map((elemento) => {
          return (
            <WrapperList key={elemento.gid}>
              <NavLink to={`/details/${elemento.gid}`}>Bizoia Details</NavLink>
              {elemento.name}
              <button onClick={() => deleteItem(elemento.gid)}>X</button>
            </WrapperList>
          );
        })}
      
    </div>
  );
}
