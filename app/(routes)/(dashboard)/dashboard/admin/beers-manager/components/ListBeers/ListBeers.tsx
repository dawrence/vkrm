import { CardBeer } from "./CardBeer";
import { ListBeersProps } from "./ListBeers.types";

export function ListBeers(props: ListBeersProps) {
  const { beers } = props;
  return (
  <div className="grid md:grid-cols-2 gap-6 my-4 lg:grid-cols-4">
    {beers.map((beer) => (
        <CardBeer beer={beer} key={beer.id} />
    ))}
  </div>
)
}
