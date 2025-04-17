// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {

    // function handleClick(event){
    //     console.log("He clicked on me")
    // }

    function handleBlur(event){
        console.log("Hey! Eyes on me")

    }
    function handleFocus(event){
        console.log("Good!")
    }
  return (
    <div>
        <button /*onClick={handleClick}*/ onFocus={handleFocus} onBlur={handleBlur}>Eyes On Me</button>
    </div>
  )
}

export default EyesOnMe