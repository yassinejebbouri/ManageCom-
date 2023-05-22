import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
   <React.Fragment>
      
      <SimpleReactLightbox>
         <App />
         <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
            theme="light"
            
      />
      </SimpleReactLightbox>
      
   </React.Fragment>,
   document.getElementById("root")
);