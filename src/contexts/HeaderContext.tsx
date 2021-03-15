import React, { createContext, ReactNode, useState } from 'react';

interface HeaderProviderProps {
  children: ReactNode;
}

interface HeaderContextData {
  isOpen: boolean;
  toggle: () => void;
}

export const HeaderContext = createContext({} as HeaderContextData);

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContext.Provider value={{ isOpen, toggle }}>
      {children}
    </HeaderContext.Provider>
  );
}
