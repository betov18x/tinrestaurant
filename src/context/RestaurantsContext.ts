import { Dispatch, SetStateAction, createContext } from "react";
import restaurantsData from "../assets/data.json";

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  url: string;
  isRestaurantLiked: boolean | null;
}

interface RestaurantsContextType {
  restaurants: Restaurant[];
  setRestaurants: Dispatch<SetStateAction<Restaurant[]>>
}

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: restaurantsData,
  setRestaurants: () => {},
});
