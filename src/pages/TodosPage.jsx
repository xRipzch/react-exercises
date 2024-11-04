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
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const newTodo = {
      title: form.get("todo"),
      completed: false,
    };

    try {
      await addTodo(newTodo);
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
      e.target.reset();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleToggleComplete = async (todoToToggle) => {
    const updatedTodo = { ...todoToToggle, completed: !todoToToggle.completed };
    try {
      await updateTodoById(updatedTodo.id, updatedTodo);
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async (todoToDelete) => {
    try {
      await deleteTodoById(todoToDelete.id);
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div style={{ maxWidth: "100%", padding: "1em" }}>
      <h1>Todos Exercise</h1>
      <TodoForm handleSubmit={handleSubmit} />
      {todos.length === 0 && <p>No todos</p>}
      <TodosList
        todos={todos}
        handleToggleComplete={handleToggleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
}
