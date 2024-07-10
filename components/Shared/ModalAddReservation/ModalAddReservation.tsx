import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Beer } from "@prisma/client";
import { CalendarSelector } from "./CalendarSelector";
import { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

export function ModalAddReservation(props: ModalAddReservationProps) {
  const { beer } = props;
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const onReserverBeer = async (beer: Beer, dateSelected: DateRange) => {
    const response = await axios.post("/api/checkout", {
      beerId: beer.id,
      price: beer.price,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      beerName: beer.name,
    });

    window.location = response.data.url;
    toast({
      title: "Beer reserver",
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full mt-3">
          Reservar cerveza
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Selecciona una fecha</AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector
              setDateSelected={setDateSelected}
              beerPriceDay={beer.price}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserverBeer(beer, dateSelected)}>
            Reservar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
