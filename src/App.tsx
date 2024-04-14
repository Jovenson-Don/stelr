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
import About from "./pages/About";
import WaitList from "./pages/WaitList";
import LandingPageFooter from "./components/headers/LandingPageFooter";

const router = createBrowserRouter(
  // createRoutesFromElements takes in a Route element and returns a route object
  createRoutesFromElements(
    // Route lets you define different paths in your application
    <Route>
      {/* This route lets you keep the navbar at the top of each page that is in between its route tags */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<LandingPageFooter />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/waitlist" element={<WaitList />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
