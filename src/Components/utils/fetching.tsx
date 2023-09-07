import { TOKEN } from "./LogIn";

const reqData = async (
  url: string,
  meth = "GET",
  dataFromUser: null | undefined | string = null,
  token: string = ""
) => {
  if (typeof TOKEN === "string") token = TOKEN;
  const req = fetch(url, {
    method: meth,
    headers: new Headers({
      "content-type": "application/json",
      authorization: token,
    }),
    body: dataFromUser,
  })
    .then((data) => data.json())
    .then((data) => data)
    .catch((err) => err);
  return req;
};
export default reqData;
