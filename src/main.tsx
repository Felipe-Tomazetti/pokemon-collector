import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import Map from "./pages/Map/Map";
import ErrorPage from "./pages/Error/ErrorPage";
import store from "./store/index";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "map",
    element: <Map />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
