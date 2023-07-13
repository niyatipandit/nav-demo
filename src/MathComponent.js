import React from "react";
import { useState } from "react";

export default function MathComponent(){

        const [one, setNo1] = useState(0);
        const [two, setNo2] = useState(0);

        const [result, setResult] = useState(0); 

        function handleNo1(e){
                const one = e.target.value
                setNo1(one);
        }

        function handleNo2(e){
                const two = e.target.value
                setNo2(two);
        }

        function handleSum(e){
                const sum = Number.parseInt(one) + Number.parseInt(two)
                setResult(sum);
        }

        function handleSub(e){
                const res = Number.parseInt(one) - Number.parseInt(two);
                setResult(res);
        }
        function handleMul(e){
                const res = Number.parseInt(one) * Number.parseInt(two);
                setResult(res);
        }
        function handleDiv(e){
                if(two === 0) {
                        setResult(0);
                } else {
                        const res = Number.parseInt(one)/Number.parseInt(two);
                        setResult(res);
                }

        }
        function handleClear(){
                setNo1('');
                setNo2('');
                setResult('');
        }
        return(
               <> 
               <center>
                <div><input type="text" value={one} name="no1" onChange={handleNo1}/></div>
                <div><input type="text" value={two} name="no2" onChange={handleNo2}/></div>
              
              <div>  
              <button onClick={handleSum}>+</button>
              <button onClick={handleSub}>-</button>
              <button onClick={handleMul}>*</button>
              <button onClick={handleDiv}>/</button>
              <div><button onClick={handleClear}>Clear</button></div>
              </div>

               <div>
                <label>{result}</label>
               </div>
               </center>
                </>
        );




}


