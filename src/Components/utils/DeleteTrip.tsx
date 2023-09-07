import { TOKEN } from "./LogIn";
import reqData from "./fetching";

const deleteTrip = async (id: string) => {
  const deleteReq = await reqData(
    `http://localhost:3000/api/trips/${id}`,
    "DELETE",
    "",
    TOKEN?.toString()
  );
  return deleteReq;
};
export default deleteTrip;
