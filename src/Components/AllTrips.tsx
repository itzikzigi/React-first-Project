import { useEffect, useState } from "react";
import GetAllTrips from "./utils/GetAllTrips";
import deleteTrip from "./utils/DeleteTrip";
import { usePage } from "./PageProvider";
import { useId } from "./IdProvider";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export interface TripInterface {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
  price: string;
  activities: string[];
}

const AllTrips = () => {
  const ID = useId();
  const { setId } = ID;
  const PAGE = usePage();
  const { setPage } = PAGE;
  const [trips, setTrips] = useState<TripInterface[]>([]);

  useEffect(() => {
    const allTrips = async () => {
      setTrips(await GetAllTrips());
    };
    allTrips();
  }, [trips]);

  return (
    <div>
      <header>
        <button onClick={() => setPage("NewTrip")}>Create New Trip</button>
      </header>
      <main style={{ display: "flex", flexWrap: "wrap" }}>
        {trips.map((item) => {
          return (
            <div
              id={item.id}
              key={item.id}
              className="trip-card"
              onClick={(e) => {
                (e.target as HTMLInputElement).value != "Delete" &&
                  (e.target as HTMLInputElement).id == item.id &&
                  setPage("Trip");
                (e.target as HTMLInputElement).id == item.id &&
                  setId((e.target as HTMLInputElement).id);
              }}
            >
              <h1 id={item.id}>{item.name}</h1>
              <h3 id={item.id}>{item.destination}</h3>
              <div>
                <img src={item.image} alt={item.destination} id={item.id} />
              </div>
              <div>
                <span id={item.id}>start Date {item.startDate}</span>
                <span id={item.id}>End Date {item.endDate}</span>
              </div>
              <div>
                <Popup
                  trigger={
                    <button className="button" id={item.id}>
                      Delete trip
                    </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div>
                      <h2 style={{ textAlign: "center" }}>
                        Press Confirm to delete
                      </h2>
                      <div
                        className="actions"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <button
                          id={item.id}
                          className="button"
                          onClick={(e) => {
                            deleteTrip((e.target as HTMLInputElement).id);
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
          );
        })}
      </main>
    </div>
  );
};

export default AllTrips;
