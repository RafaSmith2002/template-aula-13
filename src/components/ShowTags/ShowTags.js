/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import axios from "axios";
import { useCallback, useState } from "react";
import useInput from './../../hooks/formInput';
import { useRequestData } from "./../../hooks/useRequestData";
import { Auth, URL_BASE } from "../../services/api";
import { ButtonAdd, InputContain, WrapperList } from "./style";

export default function ShowTags() {
  const [tag, setTag] = useInput("")
  const [tagDetail, setTagDetail] = useState([{}]);

  const tagList = useRequestData("/workspaces/1202124799113636/tags", []);

  const getTag = useCallback((gid) => {
    axios.get(`${URL_BASE}/tags/${gid}`, Auth).then((res) => {
      setTagDetail([res.data.data]).catch((err) => {
        console.log(err);
      });
    });
  }, []);

  // const getTagsByWorkspace = useCallback(async () => {
  //   try {
  //     const response = await axios.get(
  //       `${URL_BASE}/workspaces/1202124799113636/tags`,
  //       Auth
  //     );
  //     setTagList(response.data.data);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }, []);

  const addItem = (item) => {
    console.log(item);
    axios
      .post(
        "https://app.asana.com/api/1.0/tags",
        {
          data: {
            color: "light-green",
            followers: [],
            name: `${item}`,
            notes: "esse é nosso primeiro teste",
            workspace: "1202124799113636",
          },
        },
        Auth
      )
      .then((res) => {
        getTagsByWorkspace();
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
  // useEffect(() => {
  //   getTagsByWorkspace();
  // }, [getTagsByWorkspace]);
  return (
    <div className="App">
      <h1>"CYBER TAGS"</h1> 
      <hr />
      <div>
        <InputContain value={tag} onChange={setTag} placeholder={"Digite a nova tag"} />
        <ButtonAdd onClick={() => addItem(tag)}>ADD</ButtonAdd>
      </div>

      {tagList &&
        tagList.map((elemento) => {
          return (
            <WrapperList key={elemento.gid}>
              <button onClick={() => getTag(elemento.gid)}>Ver Detalhes</button>
              {elemento.name}
              <button onClick={() => deleteItem(elemento.gid)}>X</button>
            </WrapperList>
          );
        })}

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
