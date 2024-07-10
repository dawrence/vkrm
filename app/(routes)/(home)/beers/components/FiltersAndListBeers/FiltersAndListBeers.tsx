"use client";

import { Beer } from "@prisma/client";
import { useEffect, useState } from "react";
import { FiltersAndListBeersProps } from "./FiltersAndListBeers.types";
import { ListBeers } from "../ListBeers";
import { FiltersBeers } from "../FiltersBeers";

export function FiltersAndListBeers(props: FiltersAndListBeersProps) {
  const { beers } = props;
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>();
  const [filters, setFilters] = useState({
    type: "",
  });

  useEffect(() => {
    let filtered = beers;

    if (filters.type) {
      filtered = filtered.filter((beer) =>
        beer.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    setFilteredBeers(filtered);
  }, [filters, beers]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  }

  const clearFilters = () => {
    setFilters({
      type: "",
    });
  }

  return (
    <div>
      <FiltersBeers  setFilters={handleFilterChange}
      filters={filters}
        clearFilters={clearFilters} /> 
      <ListBeers beers={filteredBeers} />
    </div>
  );
}
