import { cookies } from "next/headers";
import { verifyJwtToken } from "@/lib/auth/index.js";
import UserNameSetter from "@/components/user-name-setter";
import { Summary } from "@/components/summary/summary";

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  let name: any = "Guest";
  let surname: any = "surname";

  if (token) {
    const payload = await verifyJwtToken(token);

    if (payload) {
      name = payload.name;
      surname = payload.surname;
    }
  }

  const fullName: any = `${name} ${surname}`;

  return (
    <main className="h-full w-full">
      <h1 className="p-10 capitalize">hoşgeldin, {name}</h1>{" "}
      <UserNameSetter fullName={fullName} />
      <Summary token={token} />
    </main>
  );
}
