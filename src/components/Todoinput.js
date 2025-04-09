import React, { useState } from 'react'
import List from './List'

const Todoinput = ({ placeholder }) => {
  const [inputvalue, setinputvalue] = useState('');
  const [task, settask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (inputvalue.length > 12) {
      alert("Task input should be less than 12 characters");
    } else {
      if (inputvalue.trim() !== '') {
        if (editIndex !== null) {
          const editedTasks = [...task];
          editedTasks[editIndex] = inputvalue;
          settask(editedTasks);
          setEditIndex(null);
        } else {
          settask([...task, inputvalue]);
        }
        setinputvalue('');
      } else {
        alert("Task input is empty");
      }
    }
  };

  const handleDelete = (deleteIndex) => {
    const updatedtasks = task.filter((_, index) => index !== deleteIndex);
    settask(updatedtasks);
  }

  const handleEdit = (index) => {
    setinputvalue(task[index]);
    setEditIndex(index);
  };
  return (
    <>
      <div className='input-container'>
        <input type='text' placeholder={placeholder} value={inputvalue} onChange={(e) => setinputvalue(e.target.value)} />
        <button type="button" className='input-submit' onClick={handleSubmit}>Submit</button>
      </div>
      <List items={task} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  )
}

export default Todoinput