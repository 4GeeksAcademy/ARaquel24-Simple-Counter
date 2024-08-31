import React from "react";
// index.js o App.js
import 'bootstrap-icons/font/bootstrap-icons.css';


const SecondCounter = ({second}) => {
    let unidades = Math.floor(second %10); 
    let decenas =  Math.floor(((second / 10) % 100))%10;
    let centenas = Math.floor(((second / 100) % 100))%10;
    let millares= Math.floor(((second / 1000) % 100))%10;
    let diezMiles= Math.floor(((second / 10000) % 100))%10;
    let cienMiles= Math.floor(((second / 100000) % 100))%10;

    return(
        <div>
            <div className="container text-center bg-black text-white" style={{height: 150}}>
                <div className="row align-items-start p-3 ">
                    <div className="col border  m-2 fs-1 p-2 rounded" style={{height: 100}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock fs-1" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                        </svg>
                      
                    </div>
                    <div className="col border m-2 fs-1 p-3 rounded" style={{height: 100}}>
                        {cienMiles}
                    </div>
                    <div className="col border m-2 fs-1 p-3 rounded" style={{height: 100}}>
                        {diezMiles}
                    </div>
                    <div className="col border m-2 fs-1 p-3 rounded" style={{height: 100}}>
                        {millares} 
                    </div>
                    <div className="col border m-2 fs-1 p-3 rounded" style={{height: 100}}>
                        {centenas}
                    </div>
                    <div className="col border m-2 fs-1 p-3 rounded" style={{height: 100}}>
                        {decenas}
                    </div>
                    <div className="col border m-2 fs-1 p-3 rounded" style={{height: 100}}>
                        {unidades}
                    </div>
                </div>
            </div>

            

        </div>
    );
}

export default SecondCounter;