import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";

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
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <div ><FaSave onClick={handleEdit}/></div>
          <div ><MdCancelPresentation onClick={() => setIsEditing(false)}/></div>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: habit.completed ? "line-through" : "none",
            }}
            onClick={() => toggleHabit(habit.id)}
          >
            {habit.name}
          </span>
          <div>
            <FaPen onClick={() => setIsEditing(true)} />
          </div>
          <div>
            <MdDelete onClick={() => deleteHabit(habit.id)} />
          </div>
        </>
      )}
    </li>
  );
};

export default HabitItem;
