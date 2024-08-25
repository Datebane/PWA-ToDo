// import React, { useState } from 'react';

// const HabitForm = ({ addHabit }) => {
//   const [habit, setHabit] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addHabit(habit);
//     setHabit('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         value={habit} 
//         onChange={(e) => setHabit(e.target.value)} 
//         placeholder="Enter a new habit" 
//         required 
//       />
//       <button type="submit">Add Habit</button>
//     </form>
//   );
// };

// export default HabitForm;

import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(habit);
    setHabit('');
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={habit} 
        onChange={(e) => setHabit(e.target.value)} 
        placeholder="Enter a new habit" 
        required 
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
