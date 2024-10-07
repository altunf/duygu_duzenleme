import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function deleteSession() {
  cookies().delete("token");
  redirect("/dashboard");
}
