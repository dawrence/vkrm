"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";

import { ButtonEditBeerProps } from "./ButtonEditBeet.types";
import { FormEditBeer } from "../FormEditBeer/FormEditBeer";

export function ButtonEditBeer(props: ButtonEditBeerProps) {
    const { beerData } = props;
    const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"onClick={() => setOpenDialog(true)}>
          Editar
          <Pencil className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <FormEditBeer setOpenDialog={setOpenDialog} beerData={beerData} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

