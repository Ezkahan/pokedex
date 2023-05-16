import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./common/router";
import "./assets/tailwind.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
