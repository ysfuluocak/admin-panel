import React, { useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  getFlows,
  getPermissions,
  getRoles,
  getTasks,
  getUsers,
} from "../../services";

const Dashboard = () => {
  const dataCountArray = [];

  useEffect(() => {
    getUsers().then((userResponse) => {
      dataCountArray.push(userResponse.length);
    });
    getRoles().then((roleResponse) => {
      dataCountArray.push(roleResponse.length);
    });

    getPermissions().then((perResponse) => {
      dataCountArray.push(perResponse.length);
    });
    getTasks().then((taskResponse) => {
      dataCountArray.push(taskResponse.length);
    });

    getFlows().then((flowResponse) => {
      dataCountArray.push(flowResponse.length);
    });

    // eslint-disable-next-line
  }, []);
  return <DashboardLayout dataCount={dataCountArray} />;
};

export default Dashboard;
