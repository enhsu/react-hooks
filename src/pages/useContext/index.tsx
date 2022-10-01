import ContextChildComponent from "~/components/useContext/childComponent";
import ThemeProvider from "~/context/themeContext";

function UseContext() {
  return (
    <>
      <ThemeProvider>
        <ContextChildComponent />
      </ThemeProvider>
    </>
  );
}

export default UseContext;
