import React from 'react'

const InStockBtn = ({ handleStockChange, isInStock }) => {
  return (
    <div>
      {isInStock ? (
        <button className="primary" onClick={handleStockChange}>In Stock</button>
      ) : (
        <button onClick={handleStockChange}>Out of Stock</button>
      )}
    </div>
  )
}

export default InStockBtn
