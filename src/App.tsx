import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { CardStack } from "./components/CardStack";
import { Navbar } from "./components/Navbar";
import { Restaurant, RestaurantsContext } from "./context/RestaurantsContext";
import { useState } from "react";
import restaurantsData from "./assets/data.json";
import { LikedList } from "./components/LikedList";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <CardStack />
      </>
    ),
  },
  {
    path: "your-likes",
    element: (
      <>
        <Navbar />
        <LikedList />
      </>
    ),
  },
  { path: "*", element: <Navigate to="/" /> },
]);

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsData);
  const value = { restaurants, setRestaurants };
  return (
    <>
      <RestaurantsContext.Provider value={value}>
        <RouterProvider router={router} />
      </RestaurantsContext.Provider>
    </>
  );
}

export default App;
