import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import PrimaryButton from "./components/buttons/PrimaryButton";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<PrimaryButton />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
