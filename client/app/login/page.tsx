"use client";
import React from "react";
import { LoginForm } from "@/components/login";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const x = localStorage.getItem("token");
  if (x) {
    redirect("/users");
  }
  console.log(x, "localdata");
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
