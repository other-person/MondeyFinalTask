import React from "react";
import s from "./Counter.module.css"

type CounterPropsType = {
    display: number | string
    addNumber: ()=> void
    resetNumber: ()=> void

};

export function Counter  ( props: CounterPropsType) {

let last_number = {
    color: props.display === 5 ? "#ce1515" : ""
}
let button_inc = {
    backgroundColor: props.display < 5 ? '#06f8f8' : ""
}
let button_res = {
    backgroundColor: props.display > 0 ? '#06f8f8' : ""
}


    return (
        <section>
            <div className={s.wrapper}>
                <div className={s.numbers_window}><div style = {last_number}>{props.display}</div></div>

                <div className={s.wrapper_buttons}>
                    <button  onClick={()=>{props.addNumber()}} style = {button_inc} className={s.button_inc}><p>Inc</p></button>
                    <button onClick={()=>{props.resetNumber()}} style = {button_res} className={s.button_reset}><p>Reset</p></button>
                </div>
            </div>

        </section>

    )
};