import React from "react";

const AddButton = (props) => {

  const { handleClick, type } = props;

  return (
    <button 
      className="btn primary" 
      type="button" 
      onClick={handleClick}
    >
      {type}
    </button>
  )
}

export default AddButton;