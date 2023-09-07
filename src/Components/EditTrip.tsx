import { useState, useEffect } from "react";
import GetTrip from "./utils/GetTrip";
import UpdateTrip from "./utils/UpdateTRip";
import { TripInterface } from "./AllTrips";
import { usePage } from "./PageProvider";
import { useId } from "./IdProvider";

const EditTrip = ({ id }: { id: string }) => {
  const [form, setForm] = useState<TripInterface>({
    name: "",
    activities: [],
    description: "",
    destination: "",
    endDate: "",
    id: "",
    image: "",
    price: "",
    startDate: "",
  });
  const PAGE = usePage();
  const ID = useId();

  useEffect(() => {
    const fn = async () => {
      const reqTrip = await GetTrip(id);
      setForm(reqTrip);
    };
    fn();
  }, [id]);

  const changeHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const key = (event.target as HTMLInputElement).name;
    const val = (event.target as HTMLInputElement).value;
    form[key] = val;
    setForm((prev) => {
      return { ...prev, form };
    });
  };

  const clickHandler = async () => {
    await UpdateTrip(form, id);
    // ID.setId(trip.id);
    PAGE.setPage("Trip");
  };

  return (
    <div key={id}>
      <h1>Edit Trip</h1>
      <form
        key={id}
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
            value={form.name}
            required
          />
        </label>
        <label>
          Destination
          <input
            type="text"
            name="destination"
            placeholder="Enter trip destination"
            value={form.destination}
            required
          />
        </label>
        <label>
          Start date
          <input type="date" name="startDate" value={form.startDate} required />
        </label>
        <label>
          End date
          <input type="date" name="endDate" value={form.endDate} required />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            placeholder="Enter trip description"
            value={form.description}
            required
          />
        </label>
        <label>
          Price
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={form.price}
            required
          />
        </label>
        <label>
          Image link
          <input
            type="url"
            name="image"
            placeholder="Enter image URl"
            value={form.image}
            required
          />
        </label>
        {form.activities &&
          form.activities.map((activity: string, index: number) => (
            <label>
              activity {index + 1}
              <input type="text" name={"activity" + index} value={activity} />
            </label>
          ))}
        <button onClick={() => clickHandler()}>send</button>
      </form>
    </div>
  );
};
export default EditTrip;
