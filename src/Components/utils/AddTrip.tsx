import reqData from "./fetching";

const AddTrip = async (data: object) => {
  const req = await reqData(
    "http://localhost:3000/api/trips",
    "POST",
    JSON.stringify(data)
  );
  return req;
};
export default AddTrip;
