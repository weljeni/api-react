import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../context/TodoContext";
const EditTodo = () => {
  const { todoToEdit, saveTask } = useContext(todoContext);
  const [newTaskToEdit, setNewTaskToEdit] = useState(todoToEdit);
  const navigate = useNavigate();

  useEffect(() => {
    setNewTaskToEdit(todoToEdit);
  }, [todoToEdit]);

  const handleEditInp = (e) => {
    const newTask = {
      ...newTaskToEdit,
      task: e.target.value,
    };
    setNewTaskToEdit(newTask);
  };
  function save() {
    saveTask(newTaskToEdit);
    navigate("/");
  }
  return (
    <div>
      {newTaskToEdit ? (
        <>
          <input
            onChange={handleEditInp}
            value={newTaskToEdit.task}
            type="text"
          />

          <button onClick={save}>Save</button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default EditTodo;
