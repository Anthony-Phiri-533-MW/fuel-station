"use client";
import { useState } from "react";
// import { account, ID } from "../../utils/appwrite";
import { account} from "../../utils/appwrite";
import Link from "next/link";

interface User {
  name: string;
}

const LoginPage: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedInUser(user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setLoggedInUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loggedInUser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold">Logged in as {loggedInUser.name}</p>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <input
          className="w-full p-2 mb-2 border rounded-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-2 border rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border rounded-md"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="w-full py-2 mb-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" type="button" onClick={() => login(email, password)}>
          Login
        </button>
        <p className="p-1">Don&apost have an account? <span><Link href={"/Register"}> Register</Link></span></p>
      </form>
    </div>
  );
};

export default LoginPage;
