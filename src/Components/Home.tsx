import { usePage } from "./PageProvider";

const Home = () => {
  const PAGE = usePage();
  const { setPage } = PAGE;
  return (
    <>
      <div id="home">
        <button className="header-button" onClick={() => setPage("allTrips")}>
          All trips
        </button>
        <button className="header-button" onClick={() => setPage("UserReg")}>
          Register
        </button>
        <button className="header-button" onClick={() => setPage("UserLogin")}>
          Log In
        </button>
      </div>
    </>
  );
};
export default Home;
