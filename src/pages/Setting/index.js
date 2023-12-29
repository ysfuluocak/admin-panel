import React, { useContext, useEffect, useState } from "react";
import SettingLayout from "../../layouts/SettingLayout";
import {  getUsers, updateCurrentUser } from "../../services";
import { UserContext } from "../../context/userContext";

const Setting = ({ setColorPrimary, colorPrimary }) => {
  const [users, setUsers] = useState([]);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });
    // eslint-disable-next-line
  }, [currentUser]);

  const onFinish = (values) => {
    const user = users.find((user) => user.id === values.currentUser);
    updateCurrentUser({ ...user, color: values.color.toHexString() })
      .then((response) => {
        setCurrentUser(response);
        return response;
      })
      .then((response) => {
        setColorPrimary(response.color);
      });
  };
  return (
    <SettingLayout
      users={users}
      currentUser={currentUser}
      onFinish={onFinish}
      currentColor={colorPrimary}
    />
  );
};

export default Setting;
