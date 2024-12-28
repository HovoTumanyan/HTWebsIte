import LanguagesProvider from "./LanguagesProvider";
import MainAnimationProvider from "./MainAnimationProvider";
import MenuProvider from "./MenuProvider";
import ThemeProvider from "./ThemeProvider";

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <MenuProvider>
        <MainAnimationProvider>
          <LanguagesProvider>{children}</LanguagesProvider>
        </MainAnimationProvider>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
