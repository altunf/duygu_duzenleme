"use server";
import { deleteSession } from "./delete-cookie";

export async function logout() {
  deleteSession();
}
