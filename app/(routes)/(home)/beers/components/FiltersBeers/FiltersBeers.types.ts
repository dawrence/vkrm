export type FiltersBeersProps = {
    setFilters: (filterName: string, filterValue: string) => void
    clearFilters: () => void
    filters: {
        family: string,
        tp: string,
        categories: string,
        ibu: string,
        origin: string
    }
}