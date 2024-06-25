import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
        let [length , setLength]=useState(8);
        let [num,setnum]=useState(false);
        let [charAllowed,setCharAllowed]=useState(false)
        const [Password,setPassword]=useState("")

// useRef
const passwordRef=useRef(null)



const passwordGenerator=useEffect(()=>{
          let pass=""
          let str="ABCDEFGHIJKLMNOPQUVRSTWXYZabcdefghijklmnopqrstuvwxyz"
        if(num) str +="0123456789"
        if(charAllowed)  str +="`~!@#$%^&*(){}[]=+"


        for (let i = 0; i <=length; i++) {
          let char =Math.floor(Math.random()*str.length+1)
          pass += str.charAt(char)
          
        }
        setPassword(pass)


},[length,num,charAllowed,setPassword])


const passwordCopy=useCallback(()=>{
passwordRef.current?.select()
passwordRef.current?.setSelectionRange(0,999)
  window.navigator.clipboard.writeText(Password)
},[Password])

 

  
useEffect(()=>{
  passwordGenerator
},[length,num,charAllowed,passwordGenerator])

 
  return (

    <>
   <div
    className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-800' >
                <h1 className='text-white text-center my-3'>passwordGenerator</h1>
   
    <div className=' flex shadow rounded-lg overflow-hidden mb-4  py-4 '>
                
                <input 
              type="text"
              value={Password} 
              className='outline-none w-full py-1 px-3 rounded-l-lg '
              placeholder='password'
              readOnly // no body can write in this input

                // useRef
                ref={passwordRef}
                 
              
              />
              
    <button 
            onClick={passwordCopy}
            className='bg-blue-700 w-24 text-white px-3 py-0.5 shrink-0'>
              copy
    </button>

    </div>
    
    <div className=" flex text-sm gap-x-2 py-4">
 <div className="flex item-center gap-x-1">
        <input type="range" 
        min={8}
        max={20}
        value={length} 
        className='cursor-pointer '
        onChange={(e)=>{
          setLength(e.target.value)
        }}
        />
        <label> Length : {length}</label>
 </div>



 <div
  className="flex items-center gap-1  ">

          <input 
          type="checkbox"
          defaultChecked={num}
          id='numberInput'
          onChange={()=>{
            setnum((prev)=>!prev)
          }}
          
          />
          <label htmlFor="numberInput">Number</label>
          

 </div>
 
<div className='flex items-center gap-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}
        /> 
        <label htmlFor="characterInput">Character</label>
     
     </div>
    </div>
    </div>


    </>
  )
}

export default App
