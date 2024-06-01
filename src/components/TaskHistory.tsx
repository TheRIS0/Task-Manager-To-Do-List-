import React from 'react';
import axios from 'axios';

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface TaskHistoryProps {
    tasks: Task[];
    onTaskUpdated: (taskId: number, updatedTask: Task) => void;
    onTaskDeleted: (taskId: number) => void;
}

const TaskHistory: React.FC<TaskHistoryProps> = ({ tasks, onTaskUpdated, onTaskDeleted }) => {
    const handleBack = async (task: Task) => {
        try {
            const updatedTask = { ...task, completed: false };
            await axios.put(`http://localhost:8000/api/tasks/${task.id}`, updatedTask);
            onTaskUpdated(task.id, updatedTask);
        } catch (error) {
            console.error('There was an error updating the task!', error);
        }
    };

    const handleDelete = async (taskId: number) => {
        try {
            await axios.delete(`http://localhost:8000/api/tasks/${taskId}`);
            onTaskDeleted(taskId);
        } catch (error) {
            console.error('There was an error deleting the task!', error);
        }
    };

    return (
        <div className="mt-4">
            <h2 className="mb-4">History</h2>
            <ul className="list-group">
                {tasks.filter(task => task.completed).map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#f8f9fa' }}>
                        <div>
                            <h5>{task.title}</h5>
                            <p>{task.description}</p>
                            <p>Status: Completed</p>
                        </div>
                        <div>
                            <button className="btn btn-primary me-2" onClick={() => handleBack(task)}>Back</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskHistory;
