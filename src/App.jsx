import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { routes } from "./constants/routes";
import { Suspense } from "react";
import Loader from "./components/global/Loader";
import SplashPage from "./components/global/SplashPage";

function App() {
  return (
    <Suspense fallback={<SplashPage />}>
      <Routes>
        {routes.map((route) => {
          return (
            <Route path={route.url} element={route.page} key={route.url} />
          );
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
