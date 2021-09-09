import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
  /* function g() {
    window.location.href = "./pp";
      return (<Redirect
        to={{
          path: "/pp",
          state: { verifier_id: 2 }
        }}
      />
    )
  };
     */

    return (
        <div>
        <h1>hi</h1>
        <Link to={{
          pathname: "/next",
          state:{id:5}
          }}>
           hit it !
        </Link>
        </div>
    )
}

export default Home
