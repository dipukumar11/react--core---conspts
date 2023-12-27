import { useEffect } from "react";
import { useState } from "react";
import EtchPerson from "./EtchPerson";





function State(){

    const [state, setState]=useState(0)

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(data =>setState(data))
    })






    return(
        <div>
            <h1>Use State: {state.length}</h1>
            {
               state.map(frend => <EtchPerson frend={frend}></EtchPerson>)
            }
        </div>
    )
}

export default State;