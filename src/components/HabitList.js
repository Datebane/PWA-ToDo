import React from 'react';
import HabitItem from './HabitItem';

const HabitList = ({ habits, toggleHabit, deleteHabit, editHabit }) => {
  return (
    <ul>
      {habits.map((habit) => (
        <HabitItem 
          key={habit.id} 
          habit={habit} 
          toggleHabit={() => toggleHabit(habit.id)} 
          deleteHabit={() => deleteHabit(habit.id)}
          editHabit={editHabit}
        />
      ))}
    </ul>
  );
};

export default HabitList;
