import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  console.log("Host: ", req.url);
  return NextResponse.next();
}

export const config = { matcher: "/((?!.*\\.).*)" };
