import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import router from "./routes/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
