import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import Home from "./components/Home/Home";
import TodoList from "./components/Todolist/TodoList";
const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddTodo />} />
          <Route exact path="/list" element={<TodoList />} />
          <Route exact path="/edit" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutes;
