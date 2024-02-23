import {
  AppRoutes,
  RoutePaths,
} from "@/shared/config";
import {
  Route,
  Routes,
  type RouteProps,
} from "react-router-dom";
import { AboutPageAsync } from "@pages/AboutPage";
import { MainPageAsync } from "@pages/MainPage";
import { type ReactNode, Suspense } from "react";

const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPageAsync />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.notFound,
    element: <>404 not found</>,
  },
};

const getSuspenseElement = (page: ReactNode) => (
  <Suspense fallback={<p>Loading...</p>}>
    {page}
  </Suspense>
);

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routes).map(
          ({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={getSuspenseElement(
                element,
              )}
            />
          ),
        )}
      </Routes>
    </Suspense>
  );
}
