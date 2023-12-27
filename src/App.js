import { ConfigProvider, theme } from "antd";
import MainPage from "./pages/MainPage";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const onChangeTheme = (value) => {
    setIsDark(value);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme[isDark ? "darkAlgorithm" : "defaultAlgorithm"],
        token: {
          colorPrimary: "#F16C16",
        },
      }}
    >
      <MainPage onChangeTheme={onChangeTheme} />
    </ConfigProvider>
  );
}

export default App;
