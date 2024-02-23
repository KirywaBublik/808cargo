import { lazy } from "react";
export const NotFoundedAsync = lazy(async () => {
  return await import("./NotFounded");
});
