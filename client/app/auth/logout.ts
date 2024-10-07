"use server";
import { deleteCookie } from "./stateless-cookie";

export async function logout() {
  deleteCookie();
}
