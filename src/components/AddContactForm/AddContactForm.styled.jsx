import styled from "styled-components";


export const Form = styled.form`
  width: 315px;
`
export const Label = styled.label`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  margin-left: 15px;
  padding: 4px;
`
export const Btn = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px;
  background-color: #ffdfb7;
  border-radius: 4px;

  &:hover {
    background-color: brown;
    color: #fff;
  }
`