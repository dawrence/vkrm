"use client";
import { Beer } from "@prisma/client";

import { ListBeersProps } from "./ListBeers.types";
import Image from "next/image";
import { Gem, Heart, Earth, Percent, Airplay, Lectern, Square } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { useLovedBeers } from "@/hooks/use-loved-beers";

export function ListBeers(props: ListBeersProps) {
  const { beers } = props;
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedBeers();
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
      {beers.map((beer: Beer) => {
        const {
          id,
          price,
          photo,
          name,
          brand,
          type,
          abv,
          ibu,
          volume,
          origin,
        } = beer;

        const likedBeer = lovedItems.some((item) => item.id === beer.id);

        return (
          <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src={photo}
              alt={name}
              width={400}
              height={600}
              className="rounded-lg"
            />
            <div className="p-3 ">
              <div className="flex flex-col mb-3 gap-x-4">
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
                  className={`mt-2 cursor-pointer ${likedBeer && "fill-black"}`}
                  onClick={
                    likedBeer
                      ? () => removeLovedItem(beer.id)
                      : () => addLoveItem(beer)
                  }
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
