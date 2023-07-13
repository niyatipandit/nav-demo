// props demo
import React from "react";
export function Home(){

    const Person = (props) =>{
        return(
            <>
                <h1>Name : {props.fname}</h1>
                <h2>Age: {props.age}</h2>
            </>
        )
    }

   const name="Niyati"
    return(

        <div>
            <h1>Welcome </h1>
                     <Person 
                        fname={'Niyati'} 
                        age={'30'}
                     />
                     <Person 
                        fname={'Hiren'} 
                        age={'33'}
                    />
                     <Person 
                        fname={'puchu'} 
                        age={'0'}
                    />
        </div>
    )

}