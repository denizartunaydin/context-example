import LanguageProvider from "./context/LanguageContext";
import ThemeProvider from "./context/ThemeContext";
import HomePage from "./page/home";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HomePage />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
