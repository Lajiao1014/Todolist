import React from 'react'

export default function toDoItem({index, item, onTick, onRemove}){
    const buttonStyle = {
        backgroundColor: item.completed? 'orange' : 'white',
        color: item.completed?'white': 'black',
        padding: '2px',
        borderRadius:'10px',
        border: '1px solid black',
    };
    const taskStyle = {
        flexGrow: '1',
        textDecoration: item.completed? 'line-through':'none'
    }
    return(
        <div key={index} style={{display:'flex', gap:'15px', color: '#333', fontSize: '15px', height: '15px', alignItems: 'center'}}>
            <button onClick={onTick} style={buttonStyle}>✓</button>
            <div style={taskStyle}>{item.task}</div>
            <button onClick={onRemove}>x</button>
        </div>
    )
}