import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface NavcontextProps {
  children: ReactNode;
}

export const NavbarContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>] | null>(null);
export const NavColorContext = createContext<[string, Dispatch<SetStateAction<string>>] | null>(null);

const Navcontext = ({ children }: NavcontextProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState<string>("white");
  const locate = useLocation().pathname;

  useEffect(() => {
    if (locate === "/projects" || locate === "/agence") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  }, [locate]);

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavColorContext.Provider value={[navColor, setNavColor]}>
          {children}
        </NavColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  );
};

export default Navcontext;