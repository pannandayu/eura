import React, {  ReactNode, useState } from "react";

const GeneralContext = React.createContext({
  menu: false,
  setMenu: () => {},
});

const GeneralContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <GeneralContext.Provider
      value={{
        menu: toggleMenu,
        setMenu: toggleMenuHandler,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
export { GeneralContext };
