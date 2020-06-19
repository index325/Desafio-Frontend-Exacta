import React, { createContext, useState, useEffect } from "react";
import { uuid } from "uuidv4";

const UsersContext = createContext({
  users: {},
  setUsers: function () {},
  addUser: function (user) {},
  deleteUser: function (id) {},
  updateUser: function (user) {},
  setRgError: function () {},
  setExpedidorError: function () {},
  setSexoError: function () {},
  setEmissaoError: function () {},
  setFormDisabled: function () {},
  rgError: false,
  expedidorError: false,
  sexoError: false,
  emissaoError: false,
  formDisabled: false,
});

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      rg: "43.607.000-5",
      expedidor: "SSP",
      sexo: "Masculino",
      emissao: "24/08/1996",
      id: uuid(),
    },
  ]);
  const [rgError, setRgError] = useState(true);
  const [expedidorError, setExpedidorError] = useState(true);
  const [sexoError, setSexoError] = useState(true);
  const [emissaoError, setEmissaoError] = useState(true);
  const [formDisabled, setFormDisabled] = useState(true);

  function addUser(user) {
    setUsers([...users, user]);
  }

  function deleteUser(id) {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  useEffect(() => {
    console.log("entrou")
    if (rgError || expedidorError || sexoError || emissaoError) {
      setFormDisabled(true);
    } else {
      setFormDisabled(false);
    }
  }, [rgError, expedidorError, sexoError, emissaoError]);

  function updateUser(user) {
    console.log(users);
    let newUsers = users.map((stateUser) => {
      console.log(stateUser);
      if (stateUser.id === user.id) {
        return {
          id: user.id,
          rg: user.rg,
          expedidor: user.expedidor,
          sexo: user.sexo,
          emissao: user.emissao,
        };
      }

      return {
        ...stateUser,
      };
    });

    setUsers(newUsers);
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        addUser,
        deleteUser,
        updateUser,
        setRgError,
        setExpedidorError,
        setSexoError,
        setEmissaoError,
        setFormDisabled,
        rgError,
        expedidorError,
        sexoError,
        emissaoError,
        formDisabled,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
