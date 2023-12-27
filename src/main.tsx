import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { configAppStore } from "./ReduxStores/ConfigAppStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={configAppStore}>
    <App />
  </Provider>
);
