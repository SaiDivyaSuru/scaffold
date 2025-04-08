import React, { useState } from 'react'
import List from './List'

const Todoinput = ({placeholder}) => {
  const [inputvalue,setinputvalue] = useState('');
  const [task,settask] = useState([]);

  const handleSubmit = () =>{    
      settask([...task,inputvalue]);
      setinputvalue('');    
  }

  const handleDelete = (deleteIndex) => {
    const updatedtasks = task.filter((_,index) => index !== deleteIndex);
    settask(updatedtasks);
  }

  const handleEdit = (editindex) => {
    const edittask = task.find(index =>index === editindex );
    
  }
  return (
    <>
    <div className='input-container'>
        <input type='text' placeholder={placeholder} value={inputvalue} onChange={(e) => setinputvalue(e.target.value)}/>
        <button type="button" className='input-submit' onClick={handleSubmit}>Submit</button>
    </div>
    <List items={task} onDelete={handleDelete} onEdit={handleEdit}/>
    </>
  )
}

export default Todoinput