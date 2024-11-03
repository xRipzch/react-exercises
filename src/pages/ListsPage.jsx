export default function ListsPage() {
  const users = [
    { id: 1, name: "John Doe", email: "john@email.dk" },
    { id: 2, name: "Jane Doe", email: "jane@email.dk" },
    { id: 3, name: "James Smith", email: "james@email.dk" },
  ];

  return (
    <div className="container">
      <h1>Lists</h1>
      <p>
        Lists are used to display a collection of items. In React, you can use
        the <code>map()</code> method to create a list of elements.
      </p>
      <ul>
        {/* TODO: RENDER USER HERE: eg. John Doe - john@email.dk */}
        {/* HINT: Use the map() method to render the list of users. */}
      </ul>
    </div>
  );
}
