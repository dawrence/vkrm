import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FiltersBeersProps } from "./FiltersBeers.types";

export function FiltersBeers(props: FiltersBeersProps) {
  const { setFilters, clearFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    if (value === "CLEAR_FILTERS") {
      setFilters(filter, "");
    } else {
      setFilters(filter, value);
    }
  };

  // mt-5 mb-8 grid grid-cols-2 gap-y-5 md:grid-cols-2 md:gap-y-5 lg:flex lg:flex-row lg:space-y-0 lg:gap-10
  return (
    <div className="mt-5 mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-16 lg:flex lg:flex-row lg:space-y-0 lg:gap-10">
      <Select
        onValueChange={(value) => handleFilter("family", value)}
        value={filters.family}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Familia cervecera" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Familia</SelectLabel>
            <SelectItem
              onClick={() => handleFilter("family", "CLEAR_FILTERS")}
              className="flex items-center justify-center text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md full-w"
              value="CLEAR_FILTERS"
            >
              Remover filtro
            </SelectItem>
            <SelectItem value="Ale">Ale</SelectItem>
            <SelectItem value="Lager">Lager</SelectItem>
            <SelectItem value="Lambic">Lambic</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("tp", value)}
        value={filters.tp}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de presentacion</SelectLabel>
            <SelectItem
              onClick={() => handleFilter("tp", "CLEAR_FILTERS")}
              className="flex items-center justify-center text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md full-w"
              value="CLEAR_FILTERS"
            >
              Remover filtro
            </SelectItem>
            <SelectItem value="Botella">Botella</SelectItem>
            <SelectItem value="Lata">Lata</SelectItem>
            <SelectItem value="Barril">Barril</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("ibu", value)}
        value={filters.ibu}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Nivel de amargor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Nivel amargor</SelectLabel>
            <SelectItem
              onClick={() => handleFilter("ibu", "CLEAR_FILTERS")}
              className="flex items-center justify-center text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md full-w"
              value="CLEAR_FILTERS"
            >
              Remover filtro
            </SelectItem>
            <SelectItem value="Bajo">Bajo</SelectItem>
            <SelectItem value="Medio">Medio</SelectItem>
            <SelectItem value="Alto">Alto</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("origin", value)}
        value={filters.origin}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Origen" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Origen</SelectLabel>
            <SelectItem
              onClick={() => handleFilter("origin", "CLEAR_FILTERS")}
              className="flex items-center justify-center text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md full-w"
              value="CLEAR_FILTERS"
            >
              Remover filtro
            </SelectItem>
            <SelectItem value="Belgica">Belgica</SelectItem>
            <SelectItem value="Alemania">Alemania</SelectItem>
            <SelectItem value="Escocia">Escocia</SelectItem>
            <SelectItem value="Colombia">Colombia</SelectItem>
            <SelectItem value="España">España</SelectItem>
            <SelectItem value="Inglaterra">Inglaterra</SelectItem>
            <SelectItem value="Republica checa">Republica checa</SelectItem>
            <SelectItem value="EEUU">EEUU</SelectItem>
            <SelectItem value="Francia">Francia</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("categories", value)}
        value={filters.categories}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categoría</SelectLabel>
            <SelectItem
              onClick={() => handleFilter("categories", "CLEAR_FILTERS")}
              className="flex items-center justify-center text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md full-w"
              value="CLEAR_FILTERS"
            >
              Remover filtro
            </SelectItem>
            <SelectItem value="Importadas">Importadas</SelectItem>
            <SelectItem value="Nacionales">Nacionales</SelectItem>
            <SelectItem value="Artesanales">Artesanales</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        Remover filtros <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
