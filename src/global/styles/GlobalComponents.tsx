import styled from "styled-components";
import variables from "./variables";

export const Container = styled.div`
  /* display: grid;
  grid-template-columns: 224px auto; */
  padding-top: 40px;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Field = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 90%;
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.blueDark};
  border-radius: 8px;
  margin-right: 8px;
`

export const ButtonSave = styled(Button)`
  background-color: ${variables.green};
`

export const ButtonRed = styled(Button)`
  background-color: ${variables.red};
`
