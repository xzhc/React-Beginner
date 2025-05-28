import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { NavBar } from "./NavBar";

function App() {
  let component = null;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/store":
      component = <Store />;
      break;
  }
  return (
    <>
      <NavBar />
      {component}
    </>
  );
}

export default App;
