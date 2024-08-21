import * as jose from "jose";

function getJwtSecretKey() {
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error("JWT secret key is not available");
  }
  return new TextEncoder().encode(secretKey);
}

//JWT doğrulama
export async function verifyJwtToken(token) {
  try {
    const { payload } = await jose.jwtVerify(token, getJwtSecretKey());

    return payload;
  } catch (error) {
    console.error("JWT doğrulama hatası:", error.message);
    return null;
  }
}
