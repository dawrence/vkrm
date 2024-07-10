import * as React from "react";

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
    setFilters(filter, value);
  };

  return (
    <div className="mt-5 mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:gap-5">
      <Select onValueChange={(value) => handleFilter("type", value)} value={filters.type}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="tipo de cerveza" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de cerveza</SelectLabel>
            <SelectItem value="Lager">Lager</SelectItem>
            <SelectItem value="Ipa">IPA</SelectItem>
            <SelectItem value="Rubia">Rubia</SelectItem>
            <SelectItem value="Negra">Negra</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        Remove filter <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
