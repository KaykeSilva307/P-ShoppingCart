import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Detail } from "./Pages/Detail";
import { Layout } from "./Components/Layout";


import NotFound from "./Pages/NotFound";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/products/:item',
        element: <Detail />
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ]
  }
])

export { router }