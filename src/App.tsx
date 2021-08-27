import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";



function App () {
let [display, setDisplay] = useState(0)

function addNumber () {
    if (display === 5) {return}
    setDisplay(display + 1 )
    };


function resetNumber () {
    setDisplay( 0)
    };


    return (
        <div className="App">

            <Counter display={display}
                     addNumber={addNumber}
                     resetNumber={resetNumber}/>

        </div>
    );
}
export default App;
