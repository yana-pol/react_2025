import { createRoot } from "react-dom/client";

import { StrictMode } from "react";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Router } from "./components/app/router";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);

//<App title="Restaurants" />);
