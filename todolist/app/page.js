'use client'

import Image from "next/image";
import {useState, useRef} from 'react' 
import Child from './toDoItem'

export default function Home() {

  const [toDoItems, setToDoItems] = useState([])
  const NewTask = useRef('')

  const removeItem = (idx) =>{
    setToDoItems(()=>{
      toDoItems.splice(idx, 1)
    })
  }

  return <>
    <div className="custom-gradient h-[100vh] w-full flex justify-center items-center">
      <div className="w-[400px] h-[200px] rounded-lg bg-[#ffffff] flex justify-center ">
        <div className="w-[350px] h-[100px] bg-[#ffffff] mt-[15px]">
          <div className="flex">
            <div className="font-bold text-2xl text-black">
              To-Do List
            </div>
            <img src="/todo.png" className="w-[25px] h-[25px] m-[5px]" />
          </div>
          <div className="flex items-center justify-center bg-[#edeef0] rounded-[30px] pl-[20px] mb-[25px] mt-[10px] h-[30px]">
            <input
              onChange={(e)=>{
                NewTask.current = e.target.value
              }}
              type="text"
              placeholder="Add your text"
              className="flex-1 border-none outline-none bg-transparent p-[10px] text-[14px] text-black"
            />
            <button className="border-none outline-none px-[50px] bg-[#ff5945] text-white text-[16px] cursor-pointer rounded-[40px] h-[30px]"
              onClick={()=>{
                setToDoItems((prev)=>{
                  return [...prev,{task:NewTask.current, completed: false}]})
              }}  
            >
              Add
            </button>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            {toDoItems.map((item, idx)=>{
              return <Child key={idx} item={item} onTick={(completed)=>{
                item.completed=completed
              }} onRemove={(idx)=>{
                removeItem(idx);
              }}></Child>
            })}
          </div>
        </div>
      </div>
    </div>
  </>
}
