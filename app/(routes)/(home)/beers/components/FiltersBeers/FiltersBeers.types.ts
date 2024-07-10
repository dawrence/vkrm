export type FiltersBeersProps = {
    setFilters: (filterName: string, filterValue: string) => void
    clearFilters: () => void
    filters: {
        type: string,
    }
}