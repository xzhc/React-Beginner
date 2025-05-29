import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Store } from "./pages/Store.jsx";
import { NavBar } from "./NavBar.jsx";
import { Team } from "./pages/Team.jsx";
import TeamMember from "./pages/TeamMember.jsx";
export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: "joe", element: <TeamMember name="Joe" /> },
          { path: "sally", element: <TeamMember name="Sally" /> },
        ],
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function TeamNavLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
