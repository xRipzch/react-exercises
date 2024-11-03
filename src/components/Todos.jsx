import { PropTypes } from "prop-types";
import "../assets/css/todos.css";

export function TodoForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="todo" placeholder="Add a todo" />
      <button type="submit">Add</button>
    </form>
  );
}

export function TodosList({ todos, handleToggleComplete, handleDelete }) {
  return (
    <section className="list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleComplete={handleToggleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
}

export function TodoItem({ todo, handleToggleComplete, handleDelete }) {
  return (
    <article key={todo.id} className={`todoItem`}>
      <div
        style={{ cursor: "pointer", flex: 0 }}
        onClick={() => handleToggleComplete(todo)}
      >
        <CheckMark complete={todo.completed} />
      </div>
      <h4 style={{ flex: 2 }}>{todo.title}</h4>
      <button onClick={() => handleDelete(todo)} style={{ flex: 0 }}>
        Delete
      </button>
    </article>
  );
}

function CheckMark({ complete }) {
  return (
    <svg
      className={`checkMark ${complete ? "completed" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
}

// --- Prop types for the components ---
// These are used to validate the props passed to the components
TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

CheckMark.propTypes = {
  complete: PropTypes.bool.isRequired,
};
