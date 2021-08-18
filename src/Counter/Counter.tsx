import React from "react";
import s from "./Counter.module.css"

type CounterPropsType = { props: any }

function Counter(props: any) {



    return (
        <section>
            <div className={s.wrapper}>
                <input className={s.numbers_window} type="text" value={0}/>
                <div className={s.wrapper_buttons}>
                    <button onClick={()=>{}} className={s.button_inc}><p>Inc</p></button>
                    <button onClick={()=>{}} className={s.button_reset}><p>Reset</p></button>
                </div>
            </div>
        </section>

    )
}

export default Counter;