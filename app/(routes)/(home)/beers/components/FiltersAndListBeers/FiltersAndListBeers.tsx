"use client";

import { Beer } from "@prisma/client";
import { useEffect, useState } from "react";
import { FiltersAndListBeersProps } from "./FiltersAndListBeers.types";
import { ListBeers } from "../ListBeers";
import { FiltersBeers } from "../FiltersBeers";
import { Search } from "lucide-react";

export function FiltersAndListBeers(props: FiltersAndListBeersProps) {
  const { beers } = props;
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>();
  const [filters, setFilters] = useState({
    family: "",
    tp: "",
    categories: "",
    ibu: "",
    origin: "",
    name: "",
  });

  useEffect(() => {
    let filtered = beers;

    if (filters.family) {
      filtered = filtered.filter(
        (beer) =>
          beer.family &&
          beer.family.toLowerCase().includes(filters.family.toLowerCase())
      );
    }

    if (filters.tp) {
      filtered = filtered.filter(
        (beer) =>
          beer.tp && beer.tp.toLowerCase().includes(filters.tp.toLowerCase())
      );
    }

    if (filters.categories) {
      filtered = filtered.filter(
        (beer) =>
          beer.categories &&
          beer.categories
            .toLowerCase()
            .includes(filters.categories.toLowerCase())
      );
    }

    if (filters.ibu) {
      filtered = filtered.filter(
        (beer) =>
          beer.ibu && beer.ibu.toLowerCase().includes(filters.ibu.toLowerCase())
      );
    }

    if (filters.origin) {
      filtered = filtered.filter(
        (beer) =>
          beer.origin &&
          beer.origin.toLowerCase().includes(filters.origin.toLowerCase())
      );
    }

    if (filters.name) {
      filtered = filtered.filter((beer) =>
        beer.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    setFilteredBeers(filtered);
  }, [filters, beers]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFilters({
      family: "",
      tp: "",
      categories: "",
      ibu: "",
      origin: "",
      name: "",
    });
  };

  return (
    <div>
     <div className="flex justify-start">
    <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden w-full">
      <label htmlFor="search-input" className="cursor-pointer">
        <Search className="w-5 h-5 text-gray-500 ml-2" />
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Buscar por nombre..."
        value={filters.name}
        onChange={(e) => handleFilterChange("name", e.target.value)}
        className="pl-2 py-2 pr-3 w-full border-none outline-none"
      />
    </div>
  </div>
      <FiltersBeers
        setFilters={handleFilterChange}
        filters={filters}
        clearFilters={clearFilters}
      />
      <ListBeers beers={filteredBeers} />
    </div>
  );
}
