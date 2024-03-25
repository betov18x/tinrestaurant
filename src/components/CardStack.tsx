import { useContext } from "react";
import { Card } from "./Card";
import { EmptyList } from "./EmptyList";
import { Restaurant, RestaurantsContext } from "../context/RestaurantsContext";

export const CardStack = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const availableRestaurants = restaurants.filter(
    (r) => r.isRestaurantLiked === null
  );

  const handleLikeOrDontLike = (id: number, isRestaurantLiked: boolean) => {
    const updatedRestaurants = restaurants.map((r) => {
      if (r.id === id) {
        return { ...r, isRestaurantLiked: isRestaurantLiked };
      }
      return r;
    });

    showNextCard(updatedRestaurants, isRestaurantLiked);
  };

  const showNextCard = (
    updatedRestaurants: Restaurant[],
    isRestaurantLiked: boolean
  ) => {
    const cardStack = document.querySelector(".content-wrapper");
    if (!cardStack) return;
    const topCard = cardStack.querySelector(".card:last-child") as HTMLElement;
    if (topCard) {
      topCard.style.transform = isRestaurantLiked
        ? "translateX(150%)"
        : "translateX(-150%)";
      setTimeout(() => {
        setRestaurants(updatedRestaurants);
      }, 300);
    }
  };

  if (availableRestaurants.length === 0)
    return (
      <EmptyList
        title="There are no more restaurants :("
        paragraph="But you can still view all the restaurants you've liked!"
        linkUrl="/your-likes"
        linkText="View Liked Restaurants"
      />
    );

  return (
    <div className="content-wrapper">
      {availableRestaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          handleLikeOrDontLike={handleLikeOrDontLike}
          {...restaurant}
        />
      ))}
    </div>
  );
};
