# Task Manager - To-Do List (Frontend Version)

This is a frontend project for a Task Manager To-Do List application. It is built using React. You will need also backend version of this project to use it. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/task-manager-to-do-list.git
cd task-manager-to-do-list
npm install
```

## Usage

To run the application, use the following command:

```bash
npm start
```

The application will be available at http://localhost:3000.
Ensure that the backend is running at http://localhost:8000.

## Components

***TaskList.tsx***
Displays the list of tasks, allowing users to mark tasks as completed or delete them.

***TaskHistory.tsx***
Displays the history of completed tasks. Allows users to move tasks back to the active list or delete them.

***TaskForm.tsx***
Provides a form for creating new tasks.

***App.tsx***
Main component that integrates `TaskForm`, `TaskList`, and `TaskHistory`.

## Styling

The CSS for the application is included in the `App.css` file.

## Contributing

Contributions are welcome! Please fork this repository and create a pull request to submit your changes.

## License 

This project is not currently licensed. If you wish to use the code for commercial purposes, please contact me to discuss licensing options.
