import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Menu from "./components/Menu/Menu";

const CategoriesPage = lazy(() => import("./page/CategoriesPage"));
const Home = lazy(() => import("./page/Home"));
const Movie = lazy(() => import("./page/Movie"));
const Popular = lazy(() => import("./page/Popular/Popular"));
const Search = lazy(() => import("./page/Search"));
const TopRated = lazy(() => import("./page/TopRated"));
const Upcoming = lazy(() => import("./page/Upcoming"));

function App() {
  return (
    <div className="wrapper">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="popular"
          element={
            <Suspense fallback={<Loader />}>
              <Popular />
            </Suspense>
          }
        />
        <Route
          path="upcoming"
          element={
            <Suspense fallback={<Loader />}>
              <Upcoming />
            </Suspense>
          }
        />
        <Route
          path="top_rated"
          element={
            <Suspense fallback={<Loader />}>
              <TopRated />
            </Suspense>
          }
        />
        <Route
          path="movies/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Movie />
            </Suspense>
          }
        />
        <Route
          path="search"
          element={
            <Suspense fallback={<Loader />}>
              <Search />
            </Suspense>
          }
        />
        <Route
          path="categories"
          element={
            <Suspense fallback={<Loader />}>
              <CategoriesPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
