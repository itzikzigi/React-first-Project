import { useState } from "react";
import Register from "./utils/Register";
export type UserForm = {
  Email: string;
  Password: string;
};

const UserReg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({});
  return (
    <div id="reg-form">
      <h1>Register</h1>
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          required
        />
        <button
          type="submit"
          onClick={() => {
            const fn = async () => {
              const res = await Register({ email, password });
              setStatus(res);
              console.log(res);
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
export default UserReg;
