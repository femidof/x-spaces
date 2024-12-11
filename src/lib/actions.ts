import { signIn, signOut } from "@/auth";

export async function login() {
  // try {
  await signIn("twitter", {
    redirectTo: "/dashboard",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // } catch (error: any) {
  //   console.error(error);
  //   // throw new Error("Failed to sign in");
  //   throw new Error(error.message as string);
  // }
}

export async function logout() {
  // try {
  return await signOut({
    redirectTo: "/",
  });
  // } catch (error) {
  //   console.error(error);
  //   throw new Error("Failed to sign out");
  // }
}
