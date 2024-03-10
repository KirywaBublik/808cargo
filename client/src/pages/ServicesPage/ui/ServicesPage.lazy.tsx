import { lazy } from "react";
export const ServicesPageAsync = lazy(
  async () => {
    return await import("./ServicesPage");
  },
);
