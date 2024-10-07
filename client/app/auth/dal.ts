import "server-only";
import { verifyJwtToken } from "./stateless-cookie";
import { cache } from "react";

import { cookies } from "next/headers";

//Data Access Layer in Nextjs (https://youtu.be/N_sUsq_y10U?si=UvC2q7GsDhQat7hz)
export const getUserFullName = cache(async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const payload = await verifyJwtToken(token);
  if (!payload) return null;

  try {
    const name = payload.name;
    const surname = payload.surname;
    const fullName: any = `${name} ${surname}`;

    return fullName;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
