import { useTheme } from "~/context/themeContext";

function ContextChildComponent() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
      <div
        className={`flex justify-center items-center border w-32 h-32 ${
          isDarkTheme ? "bg-black text-white" : "bg-white"
        }`}
      >
        Theme
      </div>
    </>
  );
}

export default ContextChildComponent;
