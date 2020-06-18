import React, { createContext, useState, useEffect } from "react";

const UsersContext = createContext({
  users: {},
  setUsers: function () {},
  addUser: function (user) {},
  deleteUser: function (id) {},
  updateUser: function (user) {},
});

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      rg: "436070005",
      expedidor: "SSP",
      sexo: "Masculino",
      emissao: "24/08/1996",
    },
  ]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  function deleteUser(rg) {
    const newUsers = users.filter((user) => user.rg !== rg);
    setUsers(newUsers);
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  function updateUser(user) {
    let newUsers = users.map((stateUser) => {
      if (stateUser.rg === user.rg)
        return {
          rg: user.rg,
          expedidor: user.expedidor,
          sexo: user.sexo,
          emissao: user.emissao,
        };
      return {
        rg: user.rg,
        expedidor: user.expedidor,
        sexo: user.sexo,
        emissao: user.emissao,
      };
    });

    setUsers(newUsers);
  }

  return (
    <UsersContext.Provider
      value={{ users, setUsers, addUser, deleteUser, updateUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
