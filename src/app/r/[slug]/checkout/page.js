import { RestaurantCheckoutContainer } from "@/containers/restaurant/checkout/RestaurantCheckoutContainer";

export default function Restaurant({ params }) {
  return <RestaurantCheckoutContainer slug={params.slug} />;
}
