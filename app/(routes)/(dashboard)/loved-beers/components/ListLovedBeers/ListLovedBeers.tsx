"use client";
import { useLovedBeers } from "@/hooks/use-loved-beers";
import { Beer } from "@prisma/client";
import { Airplay, Earth, Fuel, Gauge, Gem, Heart, Lectern, Percent, Square, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";

export function ListLovedBeers() {
  const { lovedItems, removeLovedItem } = useLovedBeers();
  return (
    <>
      {lovedItems.length === 0 ? (
        <h2>Aun no dispones de cervezas que te gustan</h2>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
          {lovedItems.map((beer: Beer) => {
            const {
              price,
              photo,
              name,
              brand,
              type,
              abv,
              ibu,
              volume,
              origin,
              id,
            } = beer;

            return (
              <div
                className="p-1 rounded-lg shadow-md hover:shadow-lg"
                key={id}
              >
                <Image
                  src={photo}
                  alt={name}
                  width={400}
                  height={600}
                  className="rounded-lg"
                />
                <div className="p-3">
                  <div className="flex flex-col mb-3 gapx-4">
                    <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                    <p>{price}$</p>
                  </div>
                  <p className="flex items-center">
                    <Earth className="h-4 w-4 mr-2" strokeWidth={1} />
                    <p className="text-1xl font-bold">Origen: </p>
                    {origin}
                  </p>
                  <p className="flex items-center">
                    <Airplay className="h-4 w-4 mr-2" strokeWidth={1} />
                    <p className="text-1xl font-bold">Marca: </p>
                    {brand}
                  </p>
                  <p className="flex items-center">
                    <Percent className="h-4 w-4 mr-2" strokeWidth={1} />
                    <p className="text-1xl font-bold">% alcohol: </p>
                    {abv}
                  </p>
                  <p className="flex items-center">
                    <Lectern className="h-4 w-4 mr-2" strokeWidth={1} />
                    <p className="text-1xl font-bold">Amargura: </p>
                    {ibu}
                  </p>
                  <p className="flex items-center">
                    <Square className="h-4 w-4 mr-2" strokeWidth={1} />
                    <p className="text-1xl font-bold">Cantidad: </p>
                    {volume} ML
                  </p>
                  <p className="flex items-center">
                    <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                    <p className="text-1xl font-bold">Tipo de cerveza: </p>
                    {type}
                  </p>

                  <div className="flex items-center justify-center gap-x-3">
                    {/* <ModalAddReservation beer={beer} /> */}
                    <Heart
                      className="mt-2 cursor-pointer fill-black"
                      onClick={() => removeLovedItem(beer.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
