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
import { NotFoundedAsync } from "@pages/NotFounded";
import { ContactPageAsync } from "@/pages/ContactPage";
import { ServicesPageAsync } from "@pages/ServicesPage";

const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPageAsync />,
  },
  [AppRoutes.SERVICES]: {
    path: RoutePaths.services,
    element: <ServicesPageAsync />,
  },
  [AppRoutes.CONTACT]: {
    path: RoutePaths.contact,
    element: <ContactPageAsync />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.notFound,
    element: <NotFoundedAsync />,
  },
};

export default function AppRouter() {
  return (
    <Routes>
      {Object.values(routes).map(
        ({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ),
      )}
    </Routes>
  );
}
