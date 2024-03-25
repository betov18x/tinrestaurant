import { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { LikedCard } from "./LikedCard";
import { EmptyList } from "./EmptyList";

export const LikedList = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const likedRestaurants = restaurants.filter((r) => r.isRestaurantLiked);
  
  if(likedRestaurants.length === 0) return (
    <EmptyList
      title="Oops you have no liked restaurants yet"
      paragraph="Go to the home screen and like your favorite restaurants"
      linkUrl="/"
      linkText="Go to like Restaurants"
    />
  );
  
  return (
    <div className="liked-list">
      {likedRestaurants.map((restaurant) => (
        <LikedCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
};
