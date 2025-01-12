import IsAnimation from "./AnimationChecker";
import LanguagesProvider from "./LanguagesProvider";
import MainAnimationProvider from "./MainAnimationProvider";
import MenuProvider from "./MenuProvider";
import ThemeProvider from "./ThemeProvider";

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <MenuProvider>
        <IsAnimation>
          <MainAnimationProvider>
            <LanguagesProvider>{children}</LanguagesProvider>
          </MainAnimationProvider>
        </IsAnimation>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
