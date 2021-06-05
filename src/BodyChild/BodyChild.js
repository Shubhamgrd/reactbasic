import React from "react";

/* function BodyChild(props) {
  return <div>{props.testob.dhandha}</div>;
} */
function BodyChild({ todo, onDelete }) {
  return (
    <div>
      <div>{todo.desc}</div>
      <button
        className="btn btn-3"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default BodyChild;
