import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Hello default route</>,
  },
  {
    path: "your-likes",
    element: <>Your likes route</>,
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
