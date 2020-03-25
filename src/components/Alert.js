import React from 'react'

export const Alert = ({ alert }) => {

  return (
    alert !== null && (
      <div className={`alert alert-danger`} >
        Please, Add the task...
      </div>
    )
  )
}

export default Alert
