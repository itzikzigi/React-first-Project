import reqData from "./fetching";

const Register = async (data: object) => {
  const req = await reqData(
    "http://localhost:3000/api/auth/register",
    "POST",
    JSON.stringify(data)
  );

  return req;
};
export default Register;
