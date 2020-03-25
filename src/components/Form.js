import React, { useState, Fragment } from 'react';


const Form = ({ addTask, setAlert }) => {

  const [task, setTask] = useState('');

  const onSubmit = (e) => {
    if (task === '') {
      setAlert('Please Enter Something...', 'danger');
    } else {
      addTask(task);
      setTask('');
    }
    e.preventDefault();
  }

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <input type="text" name="text" placeholder="New Task..." spellcheck="false" autoComplete="off" onChange={handleChange} value={task} className="form-control" />
          <input type="submit" onSubmit={onSubmit} value="Add Task" className=" mt-3 btn btn-outline-secondary" />
        </div>
      </form>
    </Fragment>
  )
}

export default Form
