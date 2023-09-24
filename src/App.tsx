import styles from "./App.module.scss";

import { Routes, Route } from "react-router-dom";
import jsonRoutes from "../src/config/routes.json";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Main from "./components/layout/main/Main";

import { Home, Dashboard, Stake, Donation, NotFound } from "./routes";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/stake",
    element: <Stake />,
  },
  {
    path: "/donation",
    element: <Donation />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
