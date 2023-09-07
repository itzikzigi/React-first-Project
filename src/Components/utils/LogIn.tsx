const LogIN = (data: object) => {
  const convertData = JSON.stringify(data);
  const req = fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: convertData,
  })
    .then((data) => data.json())
    .then((data) => {
      data.responseObj.token !== undefined &&
        localStorage.setItem("authorization", data.responseObj.token);
      console.log(localStorage.getItem("authorization"));
      return data;
    })
    .catch((err) => err);

  return req;
};
export const TOKEN = localStorage.getItem("authorization");
export default LogIN;
