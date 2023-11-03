import { RestaurantContainer } from '@/containers/restaurant/RestaurantContainer'

export default function Restaurant({ params }) {
  return (
    <RestaurantContainer slug={params.slug} />
  )
}
