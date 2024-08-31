//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import SecondCounter from "./component/secondCounter.jsx";

import 'bootstrap-icons/font/bootstrap-icons.css';




// include your styles into the webpack bundle
import "../styles/index.css";


let second = 0;
setInterval (myCallBack, 1000);
function myCallBack() {
    
    second++
    const root =  ReactDOM.createRoot(document.getElementById('app'));
    root.render(<SecondCounter second={second}/>);
    

}

//render your react application

