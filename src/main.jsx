import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './components/App/App.jsx'
import Home from './routers/Home.jsx';
import Product from './routers/Product.jsx';
import SearchSection from './routers/SearchSection.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/search",
        element: <SearchSection/>
      },
    ],
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
