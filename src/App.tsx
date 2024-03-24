import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
