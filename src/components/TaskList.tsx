import React from 'react';
import axios from 'axios';

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onTaskUpdated: (taskId: number, updatedTask: Task) => void;
    onTaskDeleted: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskUpdated, onTaskDeleted }) => {
    const handleDelete = async (taskId: number) => {
        try {
            await axios.delete(`http://localhost:8000/api/tasks/${taskId}`);
            onTaskDeleted(taskId);
        } catch (error) {
            console.error('There was an error deleting the task!', error);
        }
    };

    const handleDone = async (task: Task) => {
        try {
            const updatedTask = { ...task, completed: true };
            await axios.put(`http://localhost:8000/api/tasks/${task.id}`, updatedTask);
            onTaskUpdated(task.id, updatedTask);
        } catch (error) {
            console.error('There was an error updating the task!', error);
        }
    };

    return (
        <div>
            <h2 className="mb-4">Task List</h2>
            <ul className="list-group">
                {tasks.filter(task => !task.completed).map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{task.title}</h5>
                            <p>{task.description}</p>
                            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
                        </div>
                        <div>
                            <button className="btn btn-success me-2" onClick={() => handleDone(task)}>Done</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
