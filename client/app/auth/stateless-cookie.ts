import "server-only";
import * as jose from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function getJwtSecretKey() {
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error("JWT secret key is not available");
  }
  return new TextEncoder().encode(secretKey);
}

//JWT doğrulama
export async function verifyJwtToken(token: any) {
  try {
    const { payload } = await jose.jwtVerify(token, getJwtSecretKey());

    return payload;
  } catch (error: any) {
    console.error("JWT doğrulama hatası:", error.message);
    return null;
  }
}

export function deleteCookie() {
  cookies().delete("token");
  redirect("/dashboard");
}
