import styled from "styled-components";


export const Form = styled.form`
  width: 315px;
`
export const Label = styled.label`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  margin-left: 15px;
  padding: 6px;
  border-radius: 3px;
  border: 1px solid black;
`
export const Btn = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px;
  background-color: #fdbd6f;
  border-radius: 4px;
  margin-top: 10px;
  box-shadow: 0px 1px 2px 2px rgba(0,0,0,0.5);

  &:hover {
    background-color: brown;
    color: #fff;
    box-shadow: 0px 0 2px 2px rgba(196, 195, 195, 0.5);
  }
`