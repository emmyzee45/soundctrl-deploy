import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/JWTContext';

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <AuthProvider>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </AuthProvider>
);
