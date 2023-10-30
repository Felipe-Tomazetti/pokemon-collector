import ReactDOM from 'react-dom/client';
import App from './App';
import Map from './pages/Map/Map';
import ErrorPage from './pages/Error/ErrorPage';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: 'map',
    element: <Map/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  )
