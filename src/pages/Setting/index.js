import React, { useEffect, useState } from "react";
import SettingLayout from "../../layouts/SettingLayout";
import { getCurrentUser, getUsers, updateCurrentUser } from "../../services";

const Setting = ({ setColorPrimary,colorPrimary }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });

    getCurrentUser().then((response) => {
      setCurrentUser(response);
    });
  }, []);

  const onFinish = (values) => {
    const user = users.find((user) => user.id === values.currentUser);
    updateCurrentUser({...user,color:values.color.toHexString()}).then((response) => {
      setCurrentUser(response);
      return response
    }).then(response=>{
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
