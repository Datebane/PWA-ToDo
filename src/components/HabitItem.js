import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import "./style.css";

const HabitItem = ({ habit, toggleHabit, deleteHabit, editHabit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(habit.name);

  const handleEdit = () => {
    if (newName.trim() && newName !== habit.name) {
      editHabit(habit.id, newName);
      setIsEditing(false);
    }
  };

  return (
    <div className="habit-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="habit-input"
          />
          <div className="habit-buttons">
            <FaSave onClick={handleEdit} />
            <MdCancelPresentation onClick={() => setIsEditing(false)} />
          </div>
        </>
      ) : (
        <>
          <span
            className="habit-text"
            style={{
              textDecoration: habit.completed ? "line-through" : "none",
            }}
            onClick={() => toggleHabit(habit.id)}
          >
            {habit.name}
          </span>
          <div className="habit-buttons">
            <FaPen onClick={() => setIsEditing(true)} />
            <MdDelete onClick={() => deleteHabit(habit.id)} />
          </div>
        </>
      )}
    </div>
  );
};

export default HabitItem;
