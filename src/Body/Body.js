import React from "react";
import BodyChild from "../BodyChild/BodyChild";

function Body(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <h3>Column 1</h3>
          <p>Lorem ipsum dolor..</p>
        </div>
        <div className="col-sm-4">
          <h3>Column 2</h3>
          <p>Lorem ipsum dolor..</p>
        </div>
        <div className="col-sm-4">
          {props.todos.length === 0
            ? "No Todos to dispaly"
            : props.todos.map((todo) => {
                return (
                  <>
                    <BodyChild
                      todo={todo}
                      onDelete={props.onDelete}
                      key={todo.sno1}
                    />
                  </>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Body;
