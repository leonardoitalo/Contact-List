import { Container } from "global/styles/GlobalComponents"
import GlobalStyles from "global/styles/GlobalStyles"
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom"
import routes from "routes"
import { store } from "store/store"

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Container>
          <RouterProvider router={routes} />
        </Container>
      </Provider>
    </>
  )
}

export default App
