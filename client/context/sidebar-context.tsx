import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext({});

export const SidebarContextProvider = ({ children }: any) => {
  const [sidebarItemTitle, setTitle] = useState([]);

  const values = {};
  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
