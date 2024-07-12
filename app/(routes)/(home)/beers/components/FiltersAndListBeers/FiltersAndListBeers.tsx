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
    family: "",
    tp: "",
    categories: "",
    ibu: "",
    origin: ""
  });

  useEffect(() => {
    let filtered = beers;

    if (filters.family) {
      filtered = filtered.filter((beer) =>
        beer.family && beer.family.toLowerCase().includes(filters.family.toLowerCase())
      );
    }

    if (filters.tp) {
      filtered = filtered.filter((beer) =>
        beer.tp && beer.tp.toLowerCase().includes(filters.tp.toLowerCase())
      );
    }

    if (filters.categories) {
      filtered = filtered.filter((beer) =>
        beer.categories && beer.categories.toLowerCase().includes(filters.categories.toLowerCase())
      );
    }

    if (filters.ibu) {
      filtered = filtered.filter((beer) =>
        beer.ibu && beer.ibu.toLowerCase().includes(filters.ibu.toLowerCase())
      );
    }

    if (filters.origin) {
      filtered = filtered.filter((beer) =>
        beer.origin && beer.origin.toLowerCase().includes(filters.origin.toLowerCase())
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
      family: "",
      tp: "",
      categories: "",
      ibu: "",
      origin: ""
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
