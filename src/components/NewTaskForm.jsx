import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState(""); // State for task text
  const [category, setCategory] = useState(categories[0]); // State for selected category

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Generate a unique ID
      text,
      category,
    };
    onTaskFormSubmit(newTask); // Pass the new task to the parent
    setText(""); // Reset form inputs
    setCategory(categories[0]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text} // Controlled input
          onChange={(e) => setText(e.target.value)} // Update state
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category} // Controlled select
          onChange={(e) => setCategory(e.target.value)} // Update state
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
