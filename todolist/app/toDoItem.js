import React from 'react'

export default function toDoItem({item, onTick, onRemove}){
    return(
        <>
            <input type="checkbox" onClick={onTick}></input>
            <div>{item}</div>
            <button onClick={onRemove}>x</button>
        </>
    )
}