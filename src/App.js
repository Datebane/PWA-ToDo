import React, { useEffect } from "react";
import HabitForm from "./components/HabitForm.js";
import HabitList from "./components/HabitList.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { requestNotificationPermission } from "./services/notificationService.js";
import "./App.css";

let nextId = 0;

const App = () => {
  const [habits, setHabits] = useLocalStorage("habits", []);

  const addHabit = (name) => {
    const newHabit = {
      id: nextId++,
      name,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  const toggleHabit = (id) => {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(newHabits);
  };

  // useEffect(() => {
  //   requestNotificationPermission();
  // }, []);

  const deleteHabit = (id) => {
    const newHabits = habits.filter((habit) => habit.id !== id);
    setHabits(newHabits);
  };

  const editHabit = (id, newName) => {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, name: newName } : habit
    );
    setHabits(newHabits);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="habit-title">Habit Tracker</h1>
        <HabitForm addHabit={addHabit} />
        <HabitList
          habits={habits}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
          editHabit={editHabit}
        />
      </div>
    </div>
  );
};

export default App;
