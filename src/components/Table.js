import React from 'react'

const Table = ({tasks, onDelete}) => {


  return (
    <div>
       <h1 className="text-center mb-3 font-weight-bold">Tasks</h1>
      <table className="table table-striped  rounded">
        <tbody>
         <tr>
            <th>#</th>
            <th>Task</th>
            <th>Action</th>
         </tr>
           { tasks.map( (task, index ) => {
             return(
              <tr key={index}>
              <th>{index + 1 }</th>
              <th>{task}</th>
              <th><button onClick={() => onDelete(index)} className="btn btn-outline-danger"><i className="fa fa-trash "></i></button></th>
             </tr>
             )
           })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Table
