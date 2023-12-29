import { ConfigProvider, theme } from "antd";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import { UserProvider } from "./context/userContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [colorPrimary, setColorPrimary] = useState("#F16C16");
  const onChangeTheme = (value) => {
    setIsDark(value);
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: theme[isDark ? "darkAlgorithm" : "defaultAlgorithm"],
        token: {
          colorPrimary: colorPrimary,
        },
      }}
    >
      <UserProvider>
        <MainPage
          onChangeTheme={onChangeTheme}
          setColorPrimary={setColorPrimary}
          colorPrimary={colorPrimary}
        />
      </UserProvider>
    </ConfigProvider>
  );
}

export default App;
