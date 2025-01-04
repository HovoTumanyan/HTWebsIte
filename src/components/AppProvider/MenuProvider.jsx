import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
export { MenuContext };
