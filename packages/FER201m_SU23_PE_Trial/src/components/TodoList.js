import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { Table, Button } from "react-bootstrap";

const TodoList = () => {
  const {
    users,
    todos,
    changeStatus,
    filterUsers,
    filterCompleted,
  } = useContext(TodoContext);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredTodos = todos
    .filter((todo) => {
      const userFilter =
        filterUsers.length === 0 ||
        filterUsers.includes(todo.userId.toString());
      const completedFilter =
        filterCompleted === "" ||
        todo.completed === (filterCompleted === "true");
      return userFilter && completedFilter;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  return (
    <div>
      <h1 style={{textAlign : 'center'}}>Todo List</h1>
      <Button className="mb-3" onClick={handleSort}>
        Sort: {sortOrder === "asc" ? "Ascending" : "Descending"} by Title
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>User</th>
            <th>Completed</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => {
            const user = users.find((user) => user.id == todo.userId);
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{user ? user.name : "Unknown User"}</td>
                <td>
                  {todo.completed ? (
                    <td style={{ color: "blue" }}>Finished</td>
                  ) : (
                    <td style={{ color: "red" }}>UnFinished</td>
                  )}
                </td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => changeStatus(todo.id)}
                  >
                    Change
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
