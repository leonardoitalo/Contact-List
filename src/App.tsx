// import { BarraLateral } from "containers/AsideBar"
import Contact from "containers/ContactList"
import { Container } from "global/styles/GlobalComponents"
import GlobalStyles from "global/styles/GlobalStyles"
import { Provider } from 'react-redux'
import { store } from "Redux/store/store"

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Container>
          {/* <BarraLateral /> */}
          <Contact />
        </Container>
      </Provider>
    </>
  )
}

export default App
