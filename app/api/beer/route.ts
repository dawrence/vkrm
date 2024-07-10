import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const data = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const beer = await db.beer.create({
      data: {
        userId,
        ...data,
      },
    });

    return NextResponse.json(beer);
  } catch (error) {
    console.log("[BEER]", error);
    return new NextResponse("Interal Error", { status: 500 });
  }
}