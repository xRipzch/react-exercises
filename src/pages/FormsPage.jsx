import { useState } from "react";

export default function FormsPage() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setName(inputValue);
    setInputValue("");
  };

  const handleReset = () => {
    setName("");
    setInputValue("");
  };

  return (
    <div className="container">
      <h1>Forms Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputName"
          placeholder="Please enter your name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {name && <p>Hello {name}</p>}
    </div>
  );
}
