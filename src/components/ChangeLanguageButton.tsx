import { useLanguageContext } from "../hooks/useLanguageContext";
import { useThemeContext } from "../hooks/useThemeContext";

const ChangeLanguageButton = () => {
  const { setLanguage } = useLanguageContext();

  return (
    <>
      <button onClick={() => setLanguage("tr")}>Türkçe</button>
      <button onClick={() => setLanguage("en")}>English</button>
    </>
  );
};

export default ChangeLanguageButton;
