import React, { useState } from "react";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";
import './App.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-4">React CRUD Application</h1>
      <AddUser addUser={addUser} />
      {editingUser && <EditUser editingUser={editingUser} updateUser={updateUser} />}
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;
