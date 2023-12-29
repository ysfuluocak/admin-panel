import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Dashboard from "../Dashboard";
import User from "../User";
import Role from "../Role";
import Permission from "../Permission";
import Task from "../Task";
import Flow from "../Flow";
import Setting from "../Setting";
import {
  CarryOutOutlined,
  PieChartOutlined,
  SkinOutlined,
  SlidersOutlined,
  UnorderedListOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const MainPage = ({ onChangeTheme, setColorPrimary,colorPrimary }) => {
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
      label: <Link to="/task">Task</Link>,
    },
    {
      key: "m6",
      icon: <CarryOutOutlined />,
      label: <Link to="/flow">Flow</Link>,
    },
    {
      key: "m7",
      icon: <SettingOutlined />,
      label: <Link to="/setting">Setting</Link>,
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
          <Route path="/task" element={<Task />} />
          <Route path="/flow" element={<Flow />} />
          <Route
            path="/setting"
            element={<Setting setColorPrimary={setColorPrimary} colorPrimary={colorPrimary}/>}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default MainPage;
