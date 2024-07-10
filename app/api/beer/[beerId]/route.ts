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
    const { isPublish } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const beer = await db.beer.update({
      where: {
        id: beerId,
        userId,
      },
      data: {
        isPublish: isPublish,
      },
    });

    return NextResponse.json(beer);
  } catch (error) {
    console.log("[BEER ID PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}


export async function DELETE(
  req: Request,
  { params }: { params: { beerId: string } }
) {
  try {
    const { userId } = auth();
    const { beerId } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const deletedBeer = await db.beer.delete({
      where: {
        id: beerId,
      },
    });

    return NextResponse.json(deletedBeer);
  } catch (error) {
    console.log("[DELETE CARD ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
