import { useState } from "react";

import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg"
import CourseGoals from "./components/CourseGoals.tsx";
import NewGoal from "./components/NewGoal.tsx";

function App() {
  const [goals, setGoals] = useState(
    [
        {
          id: 1,
          title: 'Learn TS',
          description: 'Learn TS form the ground up',
        },
        {
          id: 2,
          title: 'Build a React + TS App',
          description: 'Create a small React project using TypeScript and Vite.',
        },
        {
          id: 3,
          title: 'Master State Management',
          description: 'Learn how to manage component state effectively with React hooks.',
        },
        {
          id: 4,
          title: 'Deploy Your Project',
          description: 'Learn how to deploy your Vite + React app to GitHub Pages or Netlify.',
        },
      ]
  );

  function handleDeleteGoal (id: number) {
    setGoals((prevGoals) => prevGoals.filter(g => g.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals((prevGoals) => 
      prevGoals.concat({id: Math.random(), title: text, description: summary})
  );
  }

  return(
    <main>
    <Header image={{src: goalsImg, alt: 'A list of goals...'}}>
      <h1>Your Course Goals</h1>
    </Header>
    <NewGoal onAdd={handleAddGoal} />
    <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
