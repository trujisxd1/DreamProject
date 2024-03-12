import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './paginas/Index.jsx'
import PueblosMagicos from './paginas/PueblosMagicos.jsx'
import Front from './componentes/Front.jsx'
import EventosInternacionales from './paginas/EventosInternacionales.jsx'




const router = createBrowserRouter(
  [
{
  path:'/',
  element:<Front/>,
  children:[
    {
      index:true,
      element:<Index/>
    },
    {
      path:"/pueblos-magicos",
      element:<PueblosMagicos/>
    },
    {
      path:"/eventos-internacionales",
      element:<EventosInternacionales/>
    }
 
  ]
  
}
  ]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
