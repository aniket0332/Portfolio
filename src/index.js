import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from './components/Footer';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <div style={{minWidth:'410px' }}>
    <App />
    <Footer/>
    </div>
  </BrowserRouter>
);