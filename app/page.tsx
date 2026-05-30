import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/editor");
  }

  redirect(signInUrl);
}
