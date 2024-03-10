import { api } from "@/shared/lib";
import {
  type SubscribeRequest,
  type SubscribeResponse,
} from "./types";

export const postSubscribeMailing = async (
  userData: SubscribeRequest,
) =>
  (
    await api.post<SubscribeResponse>(
      "/user",
      userData,
    )
  ).data;
