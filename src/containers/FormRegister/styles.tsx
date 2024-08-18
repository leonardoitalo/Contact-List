import styled from 'styled-components'

export const Form = styled.form`
  max-width: 770px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  color: #666666;
  display: flex;
  flex-direction: column;
  gap: 8px;


  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Title = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 22px;
  font-weight: bold;
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
