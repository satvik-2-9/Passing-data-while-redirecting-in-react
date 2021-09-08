import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import pp from './pp'


function Home() {
    const [p, setp] = useState("ff");
    function g() {
  
        <Redirect
        to={{
          pathname: "/pp",
          state: { id: pp }
        }}
      />
    }
    

    return (
        <div>
            <h1>hi</h1>
            <button onClick={g} >click me</button>
        </div>
    )
}

export default Home
