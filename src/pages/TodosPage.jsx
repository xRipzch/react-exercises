import { useEffect, useState } from "react";
import { TodoForm, TodosList } from "../components/Todos";
import {
  addTodo,
  deleteTodoById,
  getTodos,
  updateTodoById,
} from "../services/apiFacade";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // TODO: Fetch todos and update the state
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = new FormData(e.target);

    const newTodo = {
      title: form.get("todo"),
      completed: false,
    };

    // TODO: Add the new todo and update the todos list

    // TODO: RESET THE FORM AFTER ADDING THE TODO
  };

  const handleToggleComplete = async todoToToggle => {
    const updatedTodo = { ...todoToToggle, completed: !todoToToggle.completed };
    // TODO: Update the todo completion status and refresh the todos list
  };

  const handleDelete = async todoToDelete => {
    // TODO: Delete the selected todo and refresh the todos list
  };

  return (
    <div style={{ maxWidth: "100%", padding: "1em" }}>
      <h1>Todos Exercise</h1>
      <TodoForm handleSubmit={handleSubmit} />
      {todos.length === 0 && <p>No todos</p>}
      {/* RENDER THE TodosList COMPONENT HERE AND PASS THE NECESSARY PROPS */}
    </div>
  );
}
