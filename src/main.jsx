import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './components/App/App.jsx';
import Home from './routers/Home.jsx';
import Product from './routers/Product.jsx';
import SearchSection from './routers/SearchSection.jsx';
import Error404 from './Pages/errorPage/index.jsx';
import CategoryPage from './Pages/CategoryPage/index.jsx';
import MyKit from './Pages/Kit/index.jsx';
import ImportedProduct from './components/ImportedProduct/index.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error404 />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/product/:product',
				element: <Product />,
			},
			{
				path: '/search',
				element: <SearchSection />,
			},
			{
				path: '/category/:category',
				element: <CategoryPage />,
			},
			{
				path: '/kit',
				element: <MyKit />,
			},
			{
				path: '/imported/:imported',
				element: <ImportedProduct />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
