'use client'
import { ChangeEvent, MouseEvent } from "react"
import Testing from "../testing/page"
export default function testing2() {

const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
 e.preventDefault()
 console.log('redhgydds');
 
}

 const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
 e.target.value
 console.log(e.target.value);
 
 }
    return (
        <main>
             <Testing title = 'avatar' about= {30} number= {true}/>
             <button onClick={handleClick} type="submit">Click me</button>
             <input type="text" onChange={handleChange}/>
        </main>
    )
}