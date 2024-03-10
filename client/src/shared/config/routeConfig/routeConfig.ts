export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  SERVICES = "services",
  CONTACT = "contact",
  NOT_FOUND = "notFound",
}

export const RoutePaths: Record<
  AppRoutes,
  string
> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.SERVICES]: "/services",
  [AppRoutes.CONTACT]: "/contacts",
  [AppRoutes.NOT_FOUND]: "*",
};
