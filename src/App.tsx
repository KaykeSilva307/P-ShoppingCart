import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Layout } from "./Components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  }
])

export { router }