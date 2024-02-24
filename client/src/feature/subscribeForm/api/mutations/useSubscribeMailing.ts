import { useMutation } from "@tanstack/react-query";
import { postSubscribeMailing } from "../requests/postSubscribeMailing";
import { type SubscribeRequest } from "../requests/types";

export const useSubscribeMailing = () => {
  return useMutation({
    mutationFn: async (
      userData: SubscribeRequest,
    ) => await postSubscribeMailing(userData),
  });
};
