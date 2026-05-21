import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);

  // user not logged in
  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      Hello {session.user?.email}
    </div>
  );
}