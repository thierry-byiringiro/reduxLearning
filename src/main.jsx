import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from './features/user.js'
import themeReducer from './features/theme.js'
import  counterSlicer  from "./features/counter.js";
const store = configureStore({
  reducer: {
    user : userReducer,
    theme : themeReducer,
    counter : counterSlicer,
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
