import React from 'react'

export default function toDoItem({ index, item, onTick, onRemove }) {
    return (
        <div key={index} style={{ display: 'flex', gap: '15px', color: '#333', fontSize: '15px', height: '15px', alignItems: 'center' }}>
            <button onClick={onTick} style={{ height: '15px', width: '15px', border: '1px solid black', borderRadius: '50%', backgroundColor: (item) => item.completed == true ? 'orange' : 'white' }}>✓</button>
            <div style={{ flexGrow: '1' }}>{item.task}</div>
            <button onClick={onRemove}>x</button>
        </div>
    )
}