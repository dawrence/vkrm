"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Airplay,
  Earth,
  Gem,
  Lectern,
  Percent,
  Square,
  Trash,
  Upload,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import axios from "axios";

import { CardBeerProps } from "./CardBeer.types";
import { ButtonEditBeer } from "./ButtonEditBeer";

export function CardBeer(props: CardBeerProps) {
  const { beer } = props;
  const router = useRouter();
  const deleteBeer = async () => {
    try {
      await axios.delete(`/api/beer/${beer.id}`);
      toast({ title: "Beer deleted" });
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const handlerPublish = async (publish: boolean) => {
    try {
      await axios.patch(`/api/beer/${beer.id}`, { isPublish: publish });

      if (publish) {
        toast({ title: "Beer published" });
      } else {
        toast({ title: "Beer unpublished" });
      }
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative p-1 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg">
      <Image
        src={beer.photo}
        alt={beer.name}
        width={400}
        height={600}
        className="rounded-lg"
      />
      {beer.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700 rounded-t-lg">
          Publicado
        </p>
      ) : (
        <p className="absolute top-0 left-0 right-0 w-full p-1 text-center text-white bg-red-300 rounded-t-lg">
          No publicado
        </p>
      )}

      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg:min-h-fit">{beer.name}</p>
          <p>{beer.price}$ COP</p>
        </div>


        <div className="grid md:grid-cols-2 gap-x-4">
          <p className="flex items-center">
            <Earth className="h-4 w-4 mr-2" strokeWidth={1} />
            {beer.origin}
          </p>

          <p className="flex items-center">
            <Airplay className="h-4 w-4 mr-2" strokeWidth={1} />
            {beer.brewery}
          </p>

          <p className="flex items-center">
            <Percent className="h-4 w-4 mr-2" strokeWidth={1} />
            {beer.abv}
          </p>

          <p className="flex items-center">
            <Lectern className="h-4 w-4 mr-2" strokeWidth={1} />
            {beer.ibu}
          </p>

          <p className="flex items-center">
            <Square className="h-4 w-4 mr-2" strokeWidth={1} />
            {beer.volume}
          </p>

          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {beer.style}
          </p>

          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {beer.family}
          </p>

          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {beer.tp}
          </p>

          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {beer.categories}
          </p>

        </div>

        <div className="flex md:flex-row flex-col-reverse gap-y-2 justify-between mt-3 gap-x-4">
          <Button variant="outline" onClick={deleteBeer}>
            Eliminar
            <Trash className="h-4 w-4 ml-2" />
          </Button>

          <ButtonEditBeer beerData={beer} />
        </div>

        {beer.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => handlerPublish(false)}
          >
            Despublicar
            <Upload className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button className="w-full mt-3" onClick={() => handlerPublish(true)}>
            Publicar
            <Upload className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
