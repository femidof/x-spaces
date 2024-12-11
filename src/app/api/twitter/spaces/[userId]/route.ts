import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { fetchFollowingSpaces } from "@/lib/twitter-api";

const secret = process.env.NEXTAUTH_SECRET;

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  const token = await getToken({ req, secret });
  if (!token || !token.accessToken) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  if (!userId) {
    return NextResponse.json({ message: "Missing userId" }, { status: 400 });
  }

  try {
    const spaces = await fetchFollowingSpaces(
      token.accessToken as string,
      userId
    );
    return NextResponse.json(spaces);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
