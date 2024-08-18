import { createBrowserRouter } from 'react-router-dom'
import Home from 'pages/Home'
import RegisterContact from 'pages/RegisterContact'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/new',
        element: <RegisterContact />
    }
])

export default routes