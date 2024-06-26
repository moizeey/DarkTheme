import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/themeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-zinc-900">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex items-center justify-center mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm   mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
