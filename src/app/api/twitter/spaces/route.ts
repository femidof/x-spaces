import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { fetchAllSpaces } from "@/lib/twitter-api";

const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret });
  console.log("TOKEN:", token);
  console.log("THANK YOU");
  if (!token || !token.accessToken) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  // try {
  const spaces = await fetchAllSpaces(token.accessToken as string);
  return NextResponse.json(spaces);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // } catch (error: any) {
  //   return NextResponse.json({ message: error.message }, { status: 500 });
  // }
}
