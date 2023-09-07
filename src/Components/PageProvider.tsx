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
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
};

const PageContext = createContext<null | ContextValue>(null);
const { Provider } = PageContext;

type PageProviderProps = {
  children: ReactNode;
};

const PageProvider: FC<PageProviderProps> = ({ children }) => {
  const [page, setPage] = useState("allTrips");
  return <Provider value={{ page, setPage }}>{children}</Provider>;
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error("usePage must be used within a PageProvider");
  return context;
};

export default PageProvider;
