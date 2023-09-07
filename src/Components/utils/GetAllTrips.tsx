import reqData from "./fetching";

const GetAllTrips = async () => {
  const data = reqData("http://localhost:3000/api/trips");
  return data.then((data) => data);
};
export default GetAllTrips;
