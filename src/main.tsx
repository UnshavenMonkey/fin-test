import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@coreui/coreui/dist/css/coreui.min.css'
import {createAppStore} from "./store.ts";
import {Provider} from "react-redux";

const store = createAppStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
