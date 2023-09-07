import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

type ContextValue = {
  id: string | null;
  setId: Dispatch<SetStateAction<string>>;
};

const NameContext = createContext<null | ContextValue>(null);
const { Provider } = NameContext;

type NameProviderProps = {
  children: ReactNode;
};

const IDProvider: FC<NameProviderProps> = ({ children }) => {
  const [id, setId] = useState<string>("");

  return <Provider value={{ id, setId }}>{children}</Provider>;
};

export const useId = () => {
  const context = useContext(NameContext);
  if (!context) throw new Error("useName must be used within a NameProvider");
  return context;
};

export default IDProvider;
