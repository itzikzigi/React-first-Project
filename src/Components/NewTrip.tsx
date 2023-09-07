import { useState } from "react";
import AddTrip from "./utils/AddTrip";
import { usePage } from "./PageProvider";
import { useId } from "./IdProvider";

const NewTrip = () => {
  const [form, setForm] = useState({});
  const PAGE = usePage();
  const ID = useId();

  const changeHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const key = (event.target as HTMLInputElement).name;
    const val = (event.target as HTMLInputElement).value;
    setForm((prev) => ({ ...prev, [key]: val }));
  };

  const clickHandler = async () => {
    try {
      const trip = await AddTrip(form);
      trip.id === undefined && PAGE.setPage("allTrips");
      ID.setId(trip.id);
      PAGE.setPage("Trip");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add Trip</h1>
      <form
        id="newTrip-form"
        onSubmit={(e) => e.preventDefault()}
        onChange={(e) => changeHandler(e)}
      >
        <label>
          Trip Name
          <input
            type="text"
            name="name"
            placeholder="Enter trip name"
            required
          />
        </label>
        <label>
          Destination
          <input
            type="text"
            name="destination"
            placeholder="Enter trip destination"
            required
          />
        </label>
        <label>
          Start date
          <input type="date" name="startDate" required />
        </label>
        <label>
          End date
          <input type="date" name="endDate" required />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            placeholder="Enter trip description"
            required
          />
        </label>
        <label>
          Price
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            required
          />
        </label>
        <label>
          Image link
          <input
            type="url"
            name="image"
            placeholder="Enter image URl"
            required
          />
        </label>
        <label>
          Activity 1
          <input type="text" name="activity1" placeholder="activity" required />
        </label>
        <label>
          Activity 2
          <input type="text" name="activity2" placeholder="activity" required />
        </label>
        <button onClick={() => clickHandler()}>send</button>
      </form>
    </div>
  );
};
export default NewTrip;
