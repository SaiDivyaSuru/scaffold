import React from 'react'

const List = ({ items, onDelete,onEdit }) => {
  return (
    <div className='todo-list-container'>
      <>
        {Array.isArray(items) &&
          items.map((item, index) => (
            <li key={index} className='todo-list'>
              <span>{item}</span>
              <button className='edit' type='button' onClick={() => onEdit(index)}>Edit</button>
              <button
                type='button'
                className='delete'
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
      </>
    </div>
  );
};


export default List