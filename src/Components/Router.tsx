import AllTrips from "./AllTrips";
import { useId } from "./IdProvider";
import NewTrip from "./NewTrip";
import { usePage } from "./PageProvider";
import TripDetail from "./Trip";
import EditTrip from "./EditTrip";
import UserLogin from "./UserLogin";
import UserReg from "./UserReg";

const Router = () => {
  const { page } = usePage();
  const { id } = useId();
  if (page === "allTrips") return <AllTrips />;
  if (page === "Trip") return <TripDetail id={String(id)} />;
  if (page === "NewTrip") return <NewTrip />;
  if (page === "UpdateTrip") return <EditTrip id={String(id)} />;
  if (page === "UserReg") return <UserReg />;
  if (page === "UserLogin") return <UserLogin />;
  return (
    <div>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
    </div>
  );
};
export default Router;
