import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export default async function token(req: NextRequest): Promise<NextResponse> {
  try {
    const token = await getToken({ req, secret });
    if (token) {
      // Signed in
      console.log("JSON Web Token", JSON.stringify(token, null, 2));
      return NextResponse.json(token);
    } else {
      // Not Signed in
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error fetching token:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
