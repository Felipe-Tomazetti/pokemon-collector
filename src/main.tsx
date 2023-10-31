import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import Map from "./pages/Map/Map";
import ErrorPage from "./pages/Error/ErrorPage";
import store from "./store/index";
import "./index.css";

type RouteConfig = {
  path: string;
  element: React.ReactElement;
  errorElement?: React.ReactElement;
};

const routerConfig: RouteConfig[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "map",
    element: <Map />,
  },
];

const router = createBrowserRouter(routerConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
