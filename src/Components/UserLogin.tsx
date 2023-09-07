import { useState } from "react";
import LogIN from "./utils/LogIn";
import { usePage } from "./PageProvider";

const UserLogin = () => {
  const PAGE = usePage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({});
  return (
    <div id="reg-form">
      <h1>Log In</h1>
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            const fn = async () => {
              const res = await LogIN({ email, password });
              setStatus(res);
              console.log(res);
              !(status instanceof Error) &&
                status.message.includes("Login successful") &&
                PAGE.setPage("allTrips");
            };
            fn();
          }}
        >
          send
        </button>
        {status.error !== undefined && <h1>{status.error}</h1>}
        {status.message !== undefined && <h1>{status.message}</h1>}
      </form>
    </div>
  );
};
export default UserLogin;
