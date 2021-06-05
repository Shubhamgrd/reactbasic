import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Form(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (!title || !desc) {
      alert("Please enter values");
    } else {
      props.addForm(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="title"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            aria-describedby="emailHelp"
            placeholder="Enter title"
          />

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="desc">Password</label>
          <input
            type="desc"
            className="form-control"
            value={desc}
            id="desc"
            placeholder="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
