
import { useState } from 'react'
import style from './Calculator.module.css'

export default function Calculator(){

    const[result, setResult]=useState('');

    const clickHandle=(e)=>{
        setResult(result.concat(e.target.value))
    }

    const clearDisplay=()=>{
        setResult('')
    }

    const calculate=()=>{
        setResult(eval(result).toString())
    }
    return(
        <div className={style.wrapper}>
            <div className={style.calc}>
            <input type='text' placeholder='0' className={style.answer} value={result}/>
            
            <input type='button' value='7' className={style.button} onClick={clickHandle}/>
            <input type='button' value='8' className={style.button} onClick={clickHandle}/>
            <input type='button' value='9' className={style.button} onClick={clickHandle}/>
            <input type='button' value='/' className={style.button1} onClick={clickHandle}/>
            
            <input type='button' value='4' className={style.button} onClick={clickHandle}/>
            <input type='button' value='5' className={style.button} onClick={clickHandle}/>
            <input type='button' value='6' className={style.button} onClick={clickHandle}/>
            <input type='button' value='*' className={style.button1} onClick={clickHandle}/>
           
        
            <input type='button' value='3' className={style.button} onClick={clickHandle}/>
            <input type='button' value='2' className={style.button} onClick={clickHandle}/>
            <input type='button' value='1' className={style.button} onClick={clickHandle}/>
            <input type='button' value='+' className={style.button1} onClick={clickHandle}/>
            
            <input type='button' value='.' className={style.button} onClick={clickHandle}/>
            <input type='button' value='0' className={style.button} onClick={clickHandle}/>
            <input type='button' value='=' className={style.button} onClick={calculate}/>
            <input type='button' value='-' className={style.button1} onClick={clickHandle}/>
        
            <input type='button' value='Clear' className={style.clear} onClick={clearDisplay}/>
            </div>
        </div>
    )
}