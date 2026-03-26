import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import CalendarBox from "../components/CalendarBox";
import "../styles/planner.css";

export default function Home() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  return (

    <div className="container">

      <h1 className="title">
        🪼 To Do List 🪼
      </h1>

      <div className="layout">

        <div>
          <CalendarBox tasks={tasks} />
          <TaskForm onAdd={addTask} />
        </div>

        <div className="card">

          <h2 className="letras">
            To Do List
          </h2>

          {tasks.length === 0 ? (
            <p className="empty">
              Nenhuma tarefa ainda 🫧
            </p>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}

        </div>

      </div>

    </div>
  );
}
