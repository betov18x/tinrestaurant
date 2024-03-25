import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { CardStack } from "./components/CardStack";
import { Navbar } from "./components/Navbar";

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
        Your likes route
      </>
    ),
  },
  { path: "*", element: <Navigate to="/" /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
