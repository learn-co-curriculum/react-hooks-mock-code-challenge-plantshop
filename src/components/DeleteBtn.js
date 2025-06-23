import React from 'react'

const DeleteBtn = ({ id, onRemove }) => {
  return (
    <>
      <button className="emoji-button delete" onClick={() => onRemove(id)}>🗑</button>
    </>
  )
}

export default DeleteBtn
