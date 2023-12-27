import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Dashboard from "../Dashboard";
import User from "../User";
import Role from "../Role";
import Permission from "../Permission";
import Tasks from "../Tasks";
import Flows from "../Flows";
import Settings from "../Settings";
import {
  CarryOutOutlined,
  PieChartOutlined,
  SkinOutlined,
  SlidersOutlined,
  UnorderedListOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const MainPage = ({ onChangeTheme }) => {
  const menu = [
    {
      key: "m1",
      icon: <PieChartOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "m2",
      icon: <UserOutlined />,
      label: <Link to="/user">User</Link>,
    },
    {
      key: "m3",
      icon: <SkinOutlined />,
      label: <Link to="/role">Role</Link>,
    },
    {
      key: "m4",
      icon: <UnorderedListOutlined />,
      label: <Link to="/permission">Permission</Link>,
    },
    {
      key: "m5",
      icon: <SlidersOutlined />,
      label: <Link to="/tasks">Tasks</Link>,
    },
    {
      key: "m6",
      icon: <CarryOutOutlined />,
      label: <Link to="/flows">Flows</Link>,
    },
    {
      key: "m7",
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];

  return (
    <BrowserRouter>
      <MainLayout menu={menu} onChangeTheme={onChangeTheme}>
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/role" element={<Role />} />
          <Route path="/permission" element={<Permission />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/flows" element={<Flows />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default MainPage;
