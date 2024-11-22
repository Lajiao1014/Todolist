import React from 'react'

export default function toDoItem({item, onTick, onRemove}){
    return(
        <span style="display:inline-block;">
            <input type="checkbox" onClick={onTick}></input>
            <div>{item.task}</div>
            <button onClick={onRemove}>x</button>
        </span>
    )
}