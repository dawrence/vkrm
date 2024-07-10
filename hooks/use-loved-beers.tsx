import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import { Beer } from "@prisma/client";

interface UseLovedBeersType {
  lovedItems: Beer[];
  addLoveItem: (data: Beer) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedBeers = create(
  persist<UseLovedBeersType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Beer) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "La cerveza ya existe en la lista 💔",
          });
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

        toast({
          title: "Cerveza añadido a la lista ",
        });
      },

      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        toast({
          title: "La cerveza se ha eliminado de la lista ",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);