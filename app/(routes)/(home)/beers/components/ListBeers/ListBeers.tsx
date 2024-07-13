"use client";

import { Button } from "@/components/ui/button";
import {
  Airplay,
  Earth,
  Fuel,
  Gauge,
  Gem,
  Heart,
  Lectern,
  Percent,
  Square,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useLovedBeers } from "@/hooks/use-loved-beers";
import { useAuth } from "@clerk/nextjs";
import { Beer } from "@prisma/client";
import Link from "next/link";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { ListBeersProps } from "./ListBeers.types";
import { SkeletonBeers } from "@/components/Shared/SkeletonBeers";

export function ListBeers(props: ListBeersProps) {
  const { beers } = props;
  const { userId } = useAuth();
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedBeers();

  if (!beers) {
    return <SkeletonBeers />;
  }
 
  return (
    <>
      {beers.length === 0 && (
        <p>No se han encontrado cervezas con estos filtros</p>
      )}
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4 ">
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
            abv,
            ibu,
            volume,
            origin, 
          } = beer;
          const likedBeer = lovedItems.some((item) => item.id === beer.id);
          return (
            <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600">
              <Image
                src={photo}
                alt=""
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

                {userId ? (
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
                ) : (
                  <div className="w-full mt-2 text-center">
                    <Link href="/sign-in" passHref>
                        <Button variant="outline" className="w-full">
                          Inicia sesion
                        </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
