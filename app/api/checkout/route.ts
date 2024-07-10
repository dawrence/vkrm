import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: {
      beerId: string;
      price: string;
      startDate: Date;
      endDate: Date;
      beerName: string;
    }}) {
      try {
        const { userId } = auth();
        const { beerId, price, startDate, endDate, beerName } = await req.json();
      
        if (!userId) {
          return new Response("Unauthorized", { status: 401 });
        }
      
        if (!beerId) {
          return new Response("beerId are required", { status: 400 });
        }
      
        const start = new Date(startDate);
        const end = new Date(endDate);
      
        const numberOfDays = Math.ceil(
          (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
        );
      
        const totalAmount = Number(price) * numberOfDays;
        const totalAmountStripe = Number(price) * 100 * numberOfDays;
      
        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
          {
            quantity: 1,
            price_data: {
              currency: "EUR",
              product_data: {
                name: beerName,
              },
              unit_amount: totalAmountStripe,
            },
          },
        ];
      
        const order = await db.order.create({
          data: {
            beerId,
            beerName: beerName,
            userId: userId,
            status: "confirmed",
            totalAmount: totalAmount.toString(),
            orderDate: startDate,
            orderEndDate: endDate,
          },
        });
      
        const session = await stripe.checkout.sessions.create({
          line_items,
          mode: "payment",
          billing_address_collection: "required",
          phone_number_collection: {
            enabled: true,
          },
          success_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-confirmation`,
          cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-error`,
          metadata: {
            orderId: order.id,
            beerId: beerId,
            startDate,
            endDate,
            numberOfDays,
          },
        });
      
        return NextResponse.json(
          { url: session.url },
          {
            headers: corsHeaders,
          }
        );
      } catch (error) {
        console.log("[ERROR] POST /api/checkout", error);
      }
}
