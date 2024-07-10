"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { FormAddBeer } from "../FormAddBeer";

export function ButtonAddBeer() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Add new Beer
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <FormAddBeer setOpenDialog={setOpenDialog}/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    
  );
}

