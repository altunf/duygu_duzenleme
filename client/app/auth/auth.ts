"use server";
import { deleteCookie } from "./stateless-cookie";

// authentication management (signup, login, logout )

export async function logout() {
  deleteCookie();
}
