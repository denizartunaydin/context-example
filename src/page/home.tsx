import ChangeLanguageButton from "../components/ChangeLanguageButton";
import ChangeThemeButton from "../components/ChangeThemeButton";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { useThemeContext } from "../hooks/useThemeContext";
import "./home.css";

const HomePage = () => {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();

  return (
    <>
      <div
        className={`container ${
          theme === "light" ? "light-mode" : "dark-mode"
        }`}
      >
        <div className="button-area">
          <ChangeThemeButton />

          <ChangeLanguageButton />
        </div>

        <div>{language === "tr" ? "Merhaba Dünya" : "Hello World"}</div>
      </div>
    </>
  );
};

export default HomePage;
