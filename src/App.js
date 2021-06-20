import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import BodyChild2 from "./BodyChild/BodyChild2";
import Form from "./Body/Form";
import Footer from "./Footer/Footer";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addForm = (title, desc) => {
    console.log("adding");
    let sno1;
    if (todos.length == 0) {
      sno1 = 1;
    } else {
      sno1 = todos[todos.length - 1].sno1 + 1;
    }
    const addvalues = {
      sno1: sno1,
      title: title,
      desc: desc,
    };
    setTodos([...todos, addvalues]);
    console.log(addvalues);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  /* const [todos, setTodos] = useState([
    { sno: 1, title: "tmse mtlb", desc: "bhag" },
    { sno: 2, title: "tmse mtlb2", desc: "bhag2" },
    { sno: 3, title: "tmse mtlb3", desc: "bhag3" },
  ]); */
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <Header title="qwertyuyhfd" />
      <Form addForm={addForm} />
      <BodyChild2 />
      <Body todos={todos} onDelete={onDelete} />
      <Footer exist={false} />
    </div>
  );
}

export default App;
