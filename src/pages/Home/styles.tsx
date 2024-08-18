import variables from "global/styles/variables"
import { Link } from "react-router-dom"
import styled from "styled-components"

const AddContactLink = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variables.green};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
export default AddContactLink