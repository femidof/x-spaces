import { auth } from "@/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "XSPACES",
  description: "XSPACES",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Providers>{children}</Providers>
    </div>
  );
}
