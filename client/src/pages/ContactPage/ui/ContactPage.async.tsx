import { lazy } from "react";
export const ContactPageAsync = lazy(async () => {
  return await import("./ContactPage");
});
