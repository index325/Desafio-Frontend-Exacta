import React, { createContext, useState, useEffect } from "react";

const UsersContext = createContext({
  users: {},
  setUsers: function () {},
  addUser: function (user) {},
  deleteUser: function (id) {},
  updateUser: function (user) {},
});

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([{
    rg: "436070005",
    expedidor: "SSP",
    sexo: "Masculino",
    emissor: "24/08/1996"
  }]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  function deleteUser(id) {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }

  useEffect(() =>{
    console.log(users)
  },[users])

  function updateUser(user) {
    let newUsers = users.map((stateUser) => {
        if (stateUser.id === user.id) return { user };
        return stateUser;
      });

      setUsers(newUsers);
  }

  return (
    <UsersContext.Provider value={{ users, setUsers, addUser, deleteUser, updateUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
