import { useThemeContext } from "../hooks/useThemeContext";

const ChangeThemeButton = () => {
  const { changeTheme } = useThemeContext();

  return (
    <>
      <button onClick={() => changeTheme("light")}>Açık Mod</button>
      <button onClick={() => changeTheme("dark")}>Koyu Mod</button>
    </>
  );
};

export default ChangeThemeButton;
