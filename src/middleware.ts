import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware() {
  // eslint-disable-next-line no-console
  console.log("midldeware request");

  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log("json", json));
  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images).*)",
    },
    // {
    //   source: "",
    //   has: [],
    //   missing: [],
    // },
  ],
};
