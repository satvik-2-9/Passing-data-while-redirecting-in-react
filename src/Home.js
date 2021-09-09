import React from 'react'
import {Link} from 'react-router-dom'


function Home(props) {
 
  
  function g(event) {
    event.preventDefault();
    props.history.push({
      pathname: '/next',
      state:{id:3}
    });
  };

    return (
        <div>
        <h1>hi</h1>
        
        <button onClick={g}> click me! </button>
        
        {/* <Link to={{
            pathname: "/next",
            state: { id: 5 }
        }}>
           hit it !
        </Link> */}
        </div>
    )
}

export default Home
