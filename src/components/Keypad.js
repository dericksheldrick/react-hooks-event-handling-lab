// Code Keypad Component Here

function Keypad (){
    function handleChange(event){
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" />
        </div>
    )
}

export default Keypad;