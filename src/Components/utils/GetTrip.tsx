import reqData from "./fetching";

const GetTrip = async (id: string) => {
  const trip = await reqData(`http://localhost:3000/api/trips/${id}`);
  return trip;
};
export default GetTrip;
