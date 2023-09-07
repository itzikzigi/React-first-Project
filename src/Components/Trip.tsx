import { TripInterface } from "./AllTrips";
import { useEffect, useState } from "react";
import GetTrip from "./utils/GetTrip";
import { usePage } from "./PageProvider";
import { Popup } from "reactjs-popup";
import deleteTrip from "./utils/DeleteTrip";

const TripDetail = ({ id }: { id: string }) => {
  const [trip, setTrip] = useState<TripInterface | null>(null);
  const Page = usePage();
  useEffect(() => {
    const data = async () => {
      setTrip(await GetTrip(id));
    };
    data();
  }, [id]);
  return (
    <div>
      <div id={id} className="trip-page">
        <h1>{trip?.name}</h1>
        <h3>{trip?.destination}</h3>
        <div>
          <img src={trip?.image} alt={trip?.destination} />
        </div>
        <div>
          <span>{trip?.description}</span>
          <span id={trip?.id}>start Date {trip?.startDate}</span>
          <span id={trip?.id}>End Date {trip?.endDate}</span>
          <span>Price: {trip?.price}</span>
          <div id={trip?.id}>
            <button
              onClick={() => {
                Page.setPage("UpdateTrip");
              }}
            >
              Edit trip
            </button>
          </div>
          <br />
        </div>
        <div>
          <Popup
            trigger={
              <button className="button" id={id}>
                Delete trip
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div>
                <h2 style={{ textAlign: "center" }}>Press Confirm to delete</h2>
                <div
                  className="actions"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <button
                    id={id}
                    className="button"
                    onClick={(e) => {
                      deleteTrip((e.target as HTMLInputElement).id);
                      Page.setPage("allTrips");
                      close();
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      close();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
};
export default TripDetail;
