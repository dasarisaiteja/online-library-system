import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import NotFound from "./components/NotFound.jsx"
import App from './App.jsx'

let appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
