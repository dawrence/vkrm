import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { beerId: string } }
) {
  try {
    const { userId } = auth();
    const { beerId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const beer = await db.beer.update({
      where: {
        id: beerId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(beer);
  } catch (error) {
    console.log("[BEER FORM ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}