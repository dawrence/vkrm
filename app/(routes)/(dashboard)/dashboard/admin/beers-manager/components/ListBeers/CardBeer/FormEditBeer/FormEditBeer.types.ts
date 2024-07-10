import { Beer } from "@prisma/client"
import { Dispatch, SetStateAction } from "react";

export type FormEditBeerProps = {
    beerData: Beer;
    setOpenDialog: Dispatch<SetStateAction<boolean>>;
}