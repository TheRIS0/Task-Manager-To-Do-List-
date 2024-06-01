import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskHistory from './components/TaskHistory';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks')
        .then(response => setTasks(response.data))
        .catch(error => console.error(error));
  }, []);

  const handleTaskCreated = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskUpdated = (taskId: number, updatedTask: Task) => {
    setTasks(tasks.map(task => task.id === taskId ? updatedTask : task));
  };

  const handleTaskDeleted = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-4 shadow-sm rounded">
              <h1 className="text-center mb-4">Task Manager</h1>
              <p className="text-center mb-4">This is a simple task management application where you can create, manage, and track your tasks. Use the "Done" button to mark tasks as completed and they will move to the History section. You can also move them back to the active list using the "Back" button. Additionally, you can delete tasks in both sections.</p>
              <TaskForm onTaskCreated={handleTaskCreated} />
              <TaskList tasks={tasks} onTaskUpdated={handleTaskUpdated} onTaskDeleted={handleTaskDeleted} />
              <TaskHistory tasks={tasks} onTaskUpdated={handleTaskUpdated} onTaskDeleted={handleTaskDeleted} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
