import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import Alert from './Alert';

const Box = () => {
  let data = getFromLocalStorage();
  const [tasks, setTasks] = useState(data);
  const [alert, setAlertState] = useState(null);

  const setAlert = (msg, type) => {
    setAlertState({ alert: { msg, type } });
    setTimeout(() => {
      setAlertState(null);
    }, 3000);
  }

  const addTask = async (task) => {
    storeDataToLocalStorage(task);
    setTasks(tasks => [...tasks, task])
  }

  const onDelete = (index) => {
    removeFromLocalStorage(index);
    const arr = tasks.filter(task => tasks[index] !== task);
    setTasks(arr);
  }

  function getFromLocalStorage() {
    let data;
    if (localStorage.getItem('data') === null) {
      data = [];
    } else {
      data = JSON.parse(localStorage.getItem('data'));
    }
    return data;
  }

  function storeDataToLocalStorage(value) {
    let data = getFromLocalStorage();
    console.log(data)
    data.push(value);
    localStorage.setItem('data', JSON.stringify(data));
  }


  function removeFromLocalStorage(index) {
    let data = getFromLocalStorage();
    const arr = data.filter(task => data[index] !== task);
    localStorage.setItem('data', JSON.stringify(arr));
  }


  return (
    <div className="d-sm-flex justify-content-center align-items-center mt-2" >
      <div className="bg-white p-sm-5 p-4 mx-auto rounded box">
        <Alert alert={alert} />
        <Form setAlert={setAlert} addTask={addTask} />
        <Table onDelete={onDelete} tasks={tasks} />
      </div>

    </div>
  )
}

export default Box
