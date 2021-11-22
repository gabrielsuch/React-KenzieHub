import './App.css';

import Routes from "./routes"

import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className="App">
      <Routes/>
      <ToastContainer
        position= "top-right"
        auto-close={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover 
      />
    </div>
  );
}

export default App;
