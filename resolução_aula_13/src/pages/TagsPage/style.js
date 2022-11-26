import styled from "styled-components";
export const tagsContain = styled.body`
display:flex ;
flex-direction: column;
align-items: center ;
`
export const InputContain = styled.input`
  border: none;
  border-radius: 5px;
  height: 20px;
`;

export const ButtonAdd = styled.button`
  border: none;
  border-radius: 5px;
  padding: 1%;
  margin-left: 10px;
  width: 60px;
`;

export const WrapperList = styled.div`
display:flex ;
justify-content:space-around ;
width:200px ;
background-color:white ;
border-radius: 5px;
text-decoration:${(props)=>props.riscado? "line-through": "none"};
margin:10px ;

`;
