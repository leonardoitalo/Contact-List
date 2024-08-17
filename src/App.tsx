import { BarraLateral } from "containers/AsideBar"
import Contact from "containers/ContactList"
import { Container } from "global/styles/GlobalComponents"
import GlobalStyles from "global/styles/GlobalStyles"


function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <BarraLateral />
        <Contact />
      </Container>
    </>
  )
}

export default App
