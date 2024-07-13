"use client";
import { Beer } from "@prisma/client";

import { ListBeersProps } from "./ListBeers.types";
import Image from "next/image";
import {
  Gem,
  Heart,
  Earth,
  Percent,
  Airplay,
  Lectern,
  Square,
} from "lucide-react";
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
          style,
          family,
          tp,
          categories,
          volume,
          abv,
          ibu,
          origin,
        } = beer;

        const likedBeer = lovedItems.some((item) => item.id === beer.id);

        return (
          <div
            key={id}
            className="p-1 rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
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
                <p className="text-1xl font-bold">Familia: </p>
                {family}
              </p>

              <p className="flex items-center">
                <Airplay className="h-4 w-4 mr-2" strokeWidth={1} />
                <p className="text-1xl font-bold">Estilo: </p>
                {style}
              </p>

              <p className="flex items-center">
                <Airplay className="h-4 w-4 mr-2" strokeWidth={1} />
                <p className="text-1xl font-bold">Presentacion: </p>
                {tp}
              </p>

              <p className="flex items-center">
                <Airplay className="h-4 w-4 mr-2" strokeWidth={1} />
                <p className="text-1xl font-bold">Categoria: </p>
                {categories}
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

              <div className="flex items-center justify-center gap-x-3">
                {/* <ModalAddReservation beer={beer} /> */}
                <Heart
                  className={`mt-2 cursor-pointer ${
                    likedBeer && "fill-black dark:fill-red-700"
                  }`}
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
