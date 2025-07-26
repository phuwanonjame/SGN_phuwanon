"use client";

import { useRouter } from "next/navigation";

import AuthForm from "@/component/AuthForm";
import { login } from "../api/login/route";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async ({ email, password }) => {
    const response = await login(email, password);
    console.log("login", response); 

    if (response.success === true) {
      
      
      router.push("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <main>
      {/* <h1>Login</h1> */}
      <AuthForm onSubmit={handleLogin} />
    </main>
  );
}
