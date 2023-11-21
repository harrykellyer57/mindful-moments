/*
filename: complex_code.js

This code is a complex implementation of a web application that allows users to create and manage their personal TODO lists. It includes features like user authentication, CRUD operations on tasks, and task tracking.

Note: This code is a demonstration and might not actually work as it does not have any backend services or database integration.
*/

// Import required libraries and modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Define global variables
let currentUser = null;
let tasks = [];

// Define components

// Main App component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = (username, password) => {
    // Logic to authenticate the user
    // ...

    // Set the currentUser
    currentUser = {
      username,
      password
    };

    // Update the state
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    // Clear currentUser
    currentUser = null;

    // Update the state
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() =>
              this.state.isLoggedIn ? (
                <Redirect to="/todo" />
              ) : (
                <Login onLogin={this.handleLogin} />
              )
            }
          />
          <Route
            exact
            path="/todo"
            render={() =>
              this.state.isLoggedIn ? (
                <TodoList onLogout={this.handleLogout} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

// Login component
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.onLogin(username, password);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            onChange={this.handleInputChange}
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

// TodoList component
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      newTaskText: "",
      tasks: tasks
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      text: this.state.newTaskText,
      completed: false
    };
    tasks.push(newTask);
    this.setState({ tasks, newTaskText: "" });
  };

  handleTaskToggle = (task) => {
    const toggledTask = { ...task, completed: !task.completed };
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    tasks.splice(taskIndex, 1, toggledTask);
    this.setState({ tasks: tasks });
  };

  handleTaskDelete = (task) => {
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    tasks.splice(taskIndex, 1);
    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button onClick={this.props.onLogout}>Logout</button>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="newTaskText"
            onChange={this.handleInputChange}
            placeholder="Enter a new task..."
            value={this.state.newTaskText}
            required
          />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {this.state.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={this.handleTaskToggle}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

// TaskItem component
const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
      />
      {task.text}
      <button onClick={() => onDelete(task)}>Delete</button>
    </li>
  );
};

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));