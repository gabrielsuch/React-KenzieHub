import {GlobalStyle} from "./styles/global"
import {Routes} from "./routes/index"

import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className="App">
      <Routes/>
      <GlobalStyle/>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
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
