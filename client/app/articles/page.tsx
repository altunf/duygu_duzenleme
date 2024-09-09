import { cookies } from "next/headers";

export default async function ArticlesPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <main className="h-full w-full">
      <h1>article page</h1>
    </main>
  );
}
