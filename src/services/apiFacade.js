const BASE_URL = "http://localhost:8080";

async function getTodos() {
  const res = await fetch(`${BASE_URL}/api/todos`);
  return await res.json();
}

async function addTodo(todo) {
  const response = await fetch(`${BASE_URL}/api/todos`, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}

async function deleteTodoById(id) {
  const response = await fetch(`${BASE_URL}/api/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

async function updateTodoById(id, todo) {
  const response = await fetch(`${BASE_URL}/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}

export { getTodos, addTodo, deleteTodoById, updateTodoById };
