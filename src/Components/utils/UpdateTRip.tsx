import { TOKEN } from "./LogIn";
import reqData from "./fetching";

const UpdateTrip = async (data: object, id: string) => {
  const req = await reqData(
    `http://localhost:3000/api/trips/${id}`,
    "PUT",
    JSON.stringify(data),
    TOKEN?.toString()
  );
  return req;
};
export default UpdateTrip;
