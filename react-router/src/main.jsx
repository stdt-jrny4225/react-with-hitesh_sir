import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter  , RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Cotact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import About from './components/About/About.jsx'
const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/github",
        element: <Github />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
