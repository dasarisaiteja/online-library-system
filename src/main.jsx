import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './components/Home.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import AddBook from "./components/AddBook.jsx"
import NotFound from "./components/NotFound.jsx"
import App from './App.jsx'

let appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/BrowseBooks",
        element:<BrowseBooks/>
      },
      {
        path:"/AddBook",
        element:<AddBook/>
      }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
